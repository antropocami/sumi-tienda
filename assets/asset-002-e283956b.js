/* @ds-bundle: {"format":4,"namespace":"SumiCrochetDesignSystem_2fb3a7","components":[{"name":"Price","sourcePath":"components/commerce/Price.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/commerce/Price.jsx":"485e4d3e81aa","components/commerce/ProductCard.jsx":"48d39f6128cf","components/core/Badge.jsx":"2be9b6d24d9d","components/core/Button.jsx":"132d464e5b58","components/core/Chip.jsx":"176c03486492","components/core/Input.jsx":"851798b66a3c","ui_kits/tienda/CartScreen.jsx":"2fff917177d5","ui_kits/tienda/HomeScreen.jsx":"80bd7f66e4c5","ui_kits/tienda/ProductScreen.jsx":"6681f6b88378","ui_kits/tienda/TiendaChrome.jsx":"791661c88b24","ui_kits/tienda/data.js":"fec062dec80b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SumiCrochetDesignSystem_2fb3a7 = window.SumiCrochetDesignSystem_2fb3a7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/Price.jsx
try { (() => {
/** Price block: optional struck-through compare price + final price, Argentine format. */
function Price({
  amount,
  compareAt,
  size = 'md'
}) {
  const sizes = {
    sm: 'var(--text-sm)',
    md: 'var(--text-md)',
    lg: 'var(--text-xl)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, compareAt && /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'line-through',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-body)',
      fontSize: 'var(--text-sm)'
    }
  }, compareAt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-body)',
      fontSize: sizes[size]
    }
  }, amount));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Price.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** Discount / shipping badge, as used on the Tiendanube product grid. */
function Badge({
  tone = 'sale',
  children,
  style
}) {
  const tones = {
    sale: {
      background: 'var(--sale)',
      color: 'var(--text-inverse)'
    },
    envio: {
      background: 'var(--success)',
      color: 'var(--text-inverse)'
    },
    brand: {
      background: 'var(--lavanda)',
      color: 'var(--text-inverse)'
    },
    soft: {
      background: 'var(--surface-soft)',
      color: 'var(--text-brand)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.04em',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-block',
      ...(tones[tone] || tones.sale),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/** Sumi button — pill, chunky, rounded. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  style
}) {
  const [state, setState] = React.useState('rest');
  const pal = {
    primary: {
      rest: {
        background: 'var(--accent)',
        color: 'var(--text-inverse)',
        border: '2px solid transparent'
      },
      hover: {
        background: 'var(--accent-hover)',
        color: 'var(--text-inverse)',
        border: '2px solid transparent'
      },
      press: {
        background: 'var(--accent-press)',
        color: 'var(--text-inverse)',
        border: '2px solid transparent'
      }
    },
    secondary: {
      rest: {
        background: 'var(--surface-card)',
        color: 'var(--text-body)',
        border: '2px solid var(--border-strong)'
      },
      hover: {
        background: 'var(--surface-soft)',
        color: 'var(--text-body)',
        border: '2px solid var(--border-strong)'
      },
      press: {
        background: 'var(--lavanda-claro)',
        color: 'var(--text-body)',
        border: '2px solid var(--border-strong)'
      }
    },
    ghost: {
      rest: {
        background: 'transparent',
        color: 'var(--text-brand)',
        border: '2px solid transparent'
      },
      hover: {
        background: 'var(--surface-soft)',
        color: 'var(--text-brand)',
        border: '2px solid transparent'
      },
      press: {
        background: 'var(--lavanda-claro)',
        color: 'var(--text-brand)',
        border: '2px solid transparent'
      }
    }
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-md)'
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'var(--text-lg)'
    }
  };
  const p = pal[variant] || pal.primary;
  const s = disabled ? p.rest : p[state];
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('press'),
    onMouseUp: () => setState('hover'),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'all var(--duration-quick) var(--ease-soft)',
      transform: state === 'press' && !disabled ? 'scale(0.97)' : 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...sizes[size],
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/** Product card as on the Tiendanube grid: photo, badges, name, price, Comprar. */
function ProductCard({
  image,
  name,
  price,
  compareAt,
  off,
  envioGratis = true,
  onBuy,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-soft)',
      boxShadow: hover ? 'var(--shadow-pop)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'all var(--duration-soft) var(--ease-soft)',
      overflow: 'hidden',
      width: '100%',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1',
      background: 'var(--surface-soft)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'flex-start'
    }
  }, off && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "sale"
  }, off), envioGratis && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "envio"
  }, "Env\xEDo gratis"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)'
    }
  }, name), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    amount: price,
    compareAt: compareAt
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onBuy
  }, "Comprar")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
/** Sticker-style chip: chunky black outline + hard offset shadow, like the sticker sheet. */
function Chip({
  selected = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-w) solid var(--border-strong)',
      background: selected ? 'var(--lavanda-claro)' : 'var(--surface-card)',
      color: selected ? 'var(--lavanda-oscuro)' : 'var(--text-body)',
      boxShadow: 'var(--shadow-sticker)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--duration-quick) var(--ease-bounce)',
      transform: hover && onClick ? 'translateY(-2px) rotate(-1deg)' : 'none',
      display: 'inline-block',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/** Rounded text input ("¿Qué estás buscando?"). */
function Input({
  placeholder,
  value,
  onChange,
  label,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      marginBottom: '6px',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-body)',
      fontSize: 'var(--text-md)',
      padding: '12px 18px',
      borderRadius: 'var(--radius-pill)',
      border: focus ? '2px solid var(--lavanda)' : '2px solid var(--border-soft)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      transition: 'border-color var(--duration-quick) var(--ease-soft)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tienda/CartScreen.jsx
try { (() => {
// Cart with fake shipping calculator, mirroring the Tiendanube cart.
function CartScreen({
  items,
  onRemove,
  onBack
}) {
  const {
    Button,
    Input,
    Price
  } = window.SumiCrochetDesignSystem_2fb3a7;
  const [cp, setCp] = React.useState('');
  const [envio, setEnvio] = React.useState(null);
  const total = items.reduce((s, p) => s + parseInt(p.price.replace(/[$.]/g, '')), 0);
  const fmt = n => '$' + Math.round(n / 100).toLocaleString('es-AR') + ',00';
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: '760px',
      margin: '0 auto',
      padding: '24px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-2xl)'
    }
  }, "Carrito de compras"), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      fontSize: 'var(--text-lg)'
    }
  }, "El carrito de compras est\xE1 vac\xEDo."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBack
  }, "Ver m\xE1s productos")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, items.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      background: '#fff',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      padding: '12px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.name,
    style: {
      width: '72px',
      height: '72px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, p.name), /*#__PURE__*/React.createElement(Price, {
    amount: p.price,
    compareAt: p.compareAt
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onRemove(i)
  }, "Quitar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-soft)',
      borderRadius: 'var(--radius-md)',
      padding: '18px',
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Entregas para el CP:",
    placeholder: "Ej. 1414",
    value: cp,
    onChange: e => setCp(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setEnvio('¡Envío gratis!')
  }, "Calcular")), envio && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--success)'
    }
  }, envio), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '2px solid var(--border-soft)',
      paddingTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-lg)'
    }
  }, "Total (sin env\xEDo): ", fmt(total)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Iniciar compra"))));
}
window.CartScreen = CartScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tienda/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tienda/HomeScreen.jsx
try { (() => {
// Home: welcome hero + Destacados grid.
function HomeScreen({
  onOpen,
  onBuy
}) {
  const {
    ProductCard,
    Chip
  } = window.SumiCrochetDesignSystem_2fb3a7;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-grain-pastel)',
      borderRadius: 'var(--radius-lg)',
      margin: '24px 0',
      padding: '48px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 'var(--text-sm)',
      color: 'var(--lavanda-oscuro)'
    }
  }, "S U M I - CROCHET"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '44px',
      lineHeight: 1.1,
      margin: '12px auto 0',
      maxWidth: '640px',
      color: 'var(--negro)'
    }
  }, "Todo lo que ves ac\xE1 est\xE1 hecho a mano"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      fontWeight: 500,
      maxWidth: '520px',
      margin: '14px auto 0',
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, "Con mucha paciencia y amor por el detalle. Tomate tu tiempo, chusme\xE1 tranqui y si algo te gusta, sab\xE9 que est\xE1s llevando una pieza \xFAnica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      marginTop: '22px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    onClick: () => {}
  }, "carteras"), /*#__PURE__*/React.createElement(Chip, {
    onClick: () => {}
  }, "almohadones"), /*#__PURE__*/React.createElement(Chip, {
    onClick: () => {}
  }, "sweaters"), /*#__PURE__*/React.createElement(Chip, {
    onClick: () => {}
  }, "fundas"))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)',
      margin: '40px 0 20px'
    }
  }, "Destacados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, window.SUMI_PRODUCTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpen(p),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    image: p.image,
    name: p.name,
    price: p.price,
    compareAt: p.compareAt,
    off: p.off,
    onBuy: () => onBuy(p)
  })))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tienda/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tienda/ProductScreen.jsx
try { (() => {
// Product detail with hours-of-work hang-tag note.
function ProductScreen({
  product,
  onBuy,
  onBack
}) {
  const {
    Button,
    Badge,
    Price
  } = window.SumiCrochetDesignSystem_2fb3a7;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-brand)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: '16px'
    }
  }), "Volver a Destacados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      marginTop: '20px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.name,
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, product.off && /*#__PURE__*/React.createElement(Badge, {
    tone: "sale"
  }, product.off), /*#__PURE__*/React.createElement(Badge, {
    tone: "envio"
  }, "Env\xEDo gratis")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-2xl)',
      margin: 0,
      lineHeight: 1.1
    }
  }, product.name), /*#__PURE__*/React.createElement(Price, {
    amount: product.price,
    compareAt: product.compareAt,
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 500,
      lineHeight: 1.5,
      margin: 0,
      color: 'var(--text-body)'
    }
  }, product.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-soft)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 18px',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--lavanda-oscuro)',
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: '18px',
      flex: 'none'
    }
  }), "esta pieza llev\xF3 muchas horas de trabajo \u2014 descubr\xED ac\xE1 c\xF3mo cuidarla"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onBuy(product)
  }, "Agregar al carrito"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Consultar por WhatsApp")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "hecha a mano en Argentina \xB7 @SUMI__CROCHET"))));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tienda/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tienda/TiendaChrome.jsx
try { (() => {
// Announcement bar, header and footer of the Sumi store (Tiendanube).
function Announcement() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lavanda)',
      color: '#fff',
      textAlign: 'center',
      padding: '8px 16px',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      fontFamily: 'var(--font-body)'
    }
  }, "\xA1Env\xEDo gratis a todo el pa\xEDs! \xB7 hecho a mano en Argentina");
}
function TiendaHeader({
  onNav,
  cartCount,
  current
}) {
  const links = [['home', 'Inicio'], ['contacto', 'Contacto'], ['cuidados', 'Cómo cuidar tu SUMI']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-soft)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-sin-fondo.png",
    alt: "Sumi",
    style: {
      height: '58px',
      cursor: 'pointer'
    },
    onClick: () => onNav('home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '24px',
      flex: 1
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => onNav(id),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-md)',
      color: current === id ? 'var(--text-brand)' : 'var(--text-body)',
      cursor: 'pointer',
      borderBottom: current === id ? '2px solid var(--lavanda)' : '2px solid transparent',
      paddingBottom: '2px'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '220px'
    }
  }, /*#__PURE__*/React.createElement(window.SumiCrochetDesignSystem_2fb3a7.Input, {
    placeholder: "\xBFQu\xE9 est\xE1s buscando?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user",
    style: {
      width: '22px',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      cursor: 'pointer'
    },
    onClick: () => onNav('carrito')
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-bag",
    style: {
      width: '22px'
    }
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-7px',
      right: '-9px',
      background: 'var(--sale)',
      color: '#fff',
      borderRadius: '999px',
      fontSize: '11px',
      fontWeight: 700,
      padding: '1px 6px',
      fontFamily: 'var(--font-body)'
    }
  }, cartCount)))));
}
function TiendaFooter() {
  const link = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: 'var(--text-sm)',
    color: '#fff',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--negro)',
      color: '#fff',
      marginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '40px 24px',
      display: 'flex',
      gap: '48px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '34px',
      color: 'var(--lavanda-claro)',
      lineHeight: 1
    }
  }, "sumi"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: '#cfc8dd',
      maxWidth: '320px',
      lineHeight: 1.5
    }
  }, "Carteras y prendas a crochet artesanales. Hecho a mano en Argentina, con mucha paciencia y amor por el detalle.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Inicio"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Contacto"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "C\xF3mo cuidar tu SUMI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "instagram",
    style: {
      width: '18px'
    }
  }), "@SUMI__CROCHET"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: '18px'
    }
  }), "+54 9 11 6579-6453"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail",
    style: {
      width: '18px'
    }
  }), "sumitejidos@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #2c2c2c',
      textAlign: 'center',
      padding: '14px',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: '#8f8a9b'
    }
  }, "Copyright Sumi \u2014 2026. Todos los derechos reservados."));
}
Object.assign(window, {
  Announcement,
  TiendaHeader,
  TiendaFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tienda/TiendaChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tienda/data.js
try { (() => {
// Catálogo real de sumicrochet.mitiendanube.com (julio 2026)
window.SUMI_PRODUCTS = [{
  id: 'sincara',
  name: 'Almohadón SIN CARA',
  price: '$36.000,00',
  compareAt: '$45.000,00',
  off: '20% OFF',
  image: '../../assets/nofaces.png',
  desc: 'Almohadón tejido a crochet, inspirado en Sin Cara. Chenille negro y blanco con detalles lavanda.'
}, {
  id: 'lavanda',
  name: 'Cartera DONUT lavanda',
  price: '$60.000,00',
  compareAt: '$66.000,00',
  off: '10% OFF',
  image: '../../assets/products/sumi-lavanda.png',
  desc: 'Cartera DONUT tejida a mano en hilado lavanda. Cierre interno y forrería.'
}, {
  id: 'bokita',
  name: 'Cartera bokita - totora',
  price: '$65.000,00',
  compareAt: '$70.000,00',
  off: '7% OFF',
  image: '../../assets/products/sumi-bokita.png',
  desc: 'Cartera bokita en totora, tejida a mano punto por punto.'
}, {
  id: 'rojo',
  name: 'Cartera DONUT MEDIUM - rojo',
  price: '$70.000,00',
  compareAt: '$100.000,00',
  off: '30% OFF',
  image: '../../assets/products/sumi-rojita-1.png',
  desc: 'Cartera DONUT medium en rojo intenso. Pieza única.'
}, {
  id: 'marron',
  name: 'Cartera DONUT LARGE - marrón',
  price: '$90.000,00',
  compareAt: '$110.000,00',
  off: '18% OFF',
  image: '../../assets/products/sumi-marron.png',
  desc: 'Cartera DONUT large en marrón. Entra todo, hasta cosas de señora.'
}, {
  id: 'artaud',
  name: 'Cartera DONUT ARTAUD',
  price: '$80.000,00',
  compareAt: '$120.000,00',
  off: '33% OFF',
  image: '../../assets/products/sumi-artaud.png',
  desc: 'Cartera DONUT edición ARTAUD.'
}, {
  id: 'capicua',
  name: 'Sweater capicua',
  price: '$110.000,00',
  compareAt: '$130.000,00',
  off: '15% OFF',
  image: '../../assets/products/buzo-sumi.png',
  desc: 'Sweater capicúa a crochet, color a elección.'
}, {
  id: 'argenta',
  name: 'Donut ARGENTA',
  price: '$70.000,00',
  compareAt: '$80.000,00',
  off: '13% OFF',
  image: '../../assets/products/sumi-arg-1.png',
  desc: 'Cartera DONUT ARGENTA, con el sol tejido a mano.'
}, {
  id: 'crema',
  name: 'Cartera DONUT crema',
  price: '$66.000,00',
  compareAt: '$70.000,00',
  off: '6% OFF',
  image: '../../assets/products/sumi-cartera-1.png',
  desc: 'Cartera DONUT en crema. Combina con todo.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tienda/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Price = __ds_scope.Price;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

})();
