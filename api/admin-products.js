// ponytail: git-as-database — no hay DB ni auth con sesión, solo una contraseña
// compartida por request contra ADMIN_PASSWORD. Alcanza para un panel de un solo
// admin (la dueña de la tienda); si algún día hay más de una persona editando,
// pasar a sesiones/roles reales.
const OWNER = 'antropocami';
const REPO = 'sumi-tienda';
const BRANCH = 'master';
const GH_API = 'https://api.github.com';
const MARK_START = '/* PRODUCTS_START */';
const MARK_END = '/* PRODUCTS_END */';

async function ghGet(path) {
  const r = await fetch(`${GH_API}/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`, {
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: 'application/vnd.github+json' },
  });
  if (!r.ok) throw new Error(`No se pudo leer ${path} (${r.status})`);
  return r.json();
}

async function ghPut(path, base64Content, sha, message) {
  const r = await fetch(`${GH_API}/repos/${OWNER}/${REPO}/contents/${path}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: 'application/vnd.github+json' },
    body: JSON.stringify({ message, content: base64Content, sha, branch: BRANCH }),
  });
  if (!r.ok) {
    const err = await r.json().catch(() => ({}));
    throw new Error(err.message || `No se pudo escribir ${path}`);
  }
  return r.json();
}

function resolveResourceRefs(html, arrText) {
  const m = html.match(/window\.__resources\s*=\s*(\{[^;]*?\});/);
  const resources = m ? JSON.parse(m[1]) : {};
  return arrText.replace(/window\.__resources\.(\w+)/g, (_, key) => {
    if (!(key in resources)) throw new Error('Recurso de imagen desconocido: ' + key);
    return `'${resources[key]}'`;
  });
}

function parseProducts(html) {
  const start = html.indexOf(MARK_START);
  const end = html.indexOf(MARK_END);
  if (start === -1 || end === -1) throw new Error('No se encontraron los marcadores de productos en index.html');
  const arrText = resolveResourceRefs(html, html.slice(start + MARK_START.length, end));
  return new Function(`return [${arrText}];`)();
}

function esc(s) {
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r\n/g, '\\n')
    .replace(/[\r\n]/g, '\\n')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function serializeProducts(list) {
  return list.map((p) => {
    const parts = [`id: '${esc(p.id)}'`, `cat: '${esc(p.cat)}'`];
    if (p.horas) parts.push(`horas: '${esc(p.horas)}'`);
    parts.push(`name: '${esc(p.name)}'`, `price: '${esc(p.price)}'`);
    if (p.compareAt) parts.push(`compareAt: '${esc(p.compareAt)}'`);
    if (p.off) parts.push(`off: '${esc(p.off)}'`);
    parts.push(`image: '${esc(p.image)}'`, `desc: '${esc(p.desc)}'`);
    return `      { ${parts.join(', ')} }`;
  }).join(',\n');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { password, action } = req.body || {};
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Contraseña incorrecta' });
    return;
  }
  if (!process.env.GITHUB_TOKEN) {
    res.status(500).json({ error: 'Falta configurar GITHUB_TOKEN en el servidor' });
    return;
  }

  try {
    if (action === 'list') {
      const file = await ghGet('index.html');
      const html = Buffer.from(file.content, 'base64').toString('utf8');
      res.status(200).json({ products: parseProducts(html) });
      return;
    }

    if (action === 'save') {
      const { products, newImage } = req.body;
      if (!Array.isArray(products)) {
        res.status(400).json({ error: 'Lista de productos inválida' });
        return;
      }

      if (newImage && newImage.filename && newImage.base64) {
        if (!/^[a-z0-9-]+\.(jpg|jpeg|png|webp)$/i.test(newImage.filename)) {
          res.status(400).json({ error: 'Nombre de imagen inválido' });
          return;
        }
        let existingSha;
        try {
          existingSha = (await ghGet(`assets/${newImage.filename}`)).sha;
        } catch {
          // no existía, se crea de cero
        }
        await ghPut(`assets/${newImage.filename}`, newImage.base64, existingSha, `Imagen de producto: ${newImage.filename}`);
      }

      const file = await ghGet('index.html');
      const html = Buffer.from(file.content, 'base64').toString('utf8');
      const start = html.indexOf(MARK_START);
      const end = html.indexOf(MARK_END);
      if (start === -1 || end === -1) {
        res.status(500).json({ error: 'No se encontraron los marcadores de productos' });
        return;
      }
      const newHtml = html.slice(0, start + MARK_START.length) + '\n' + serializeProducts(products) + '\n      ' + html.slice(end);
      await ghPut('index.html', Buffer.from(newHtml, 'utf8').toString('base64'), file.sha, 'Actualizar catálogo de productos desde el panel');
      res.status(200).json({ ok: true });
      return;
    }

    res.status(400).json({ error: 'Acción inválida' });
  } catch (err) {
    console.error('admin-products error:', err);
    res.status(500).json({ error: err.message || 'Error interno' });
  }
};
