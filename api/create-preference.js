const { MercadoPagoConfig, Preference } = require('mercadopago');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    res.status(500).json({ error: 'Falta configurar MP_ACCESS_TOKEN en el servidor' });
    return;
  }

  const items = req.body && req.body.items;
  if (!Array.isArray(items) || items.length === 0) {
    res.status(400).json({ error: 'El carrito está vacío' });
    return;
  }

  const origin = `https://${req.headers.host}`;

  try {
    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: items.map((it) => ({
          title: String(it.title).slice(0, 256),
          quantity: Number(it.quantity) > 0 ? Number(it.quantity) : 1,
          unit_price: Number(it.unit_price),
          currency_id: 'ARS',
        })),
        back_urls: {
          success: `${origin}/?mp_status=approved`,
          pending: `${origin}/?mp_status=pending`,
          failure: `${origin}/?mp_status=failure`,
        },
        auto_return: 'approved',
      },
    });
    res.status(200).json({ init_point: result.init_point });
  } catch (err) {
    console.error('MercadoPago preference error:', err);
    res.status(500).json({ error: 'No se pudo crear el pago' });
  }
};
