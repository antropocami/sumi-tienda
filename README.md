# sumi — tienda online

Sitio estático (`index.html` + `assets/`) con checkout de Mercado Pago vía una función serverless en `api/create-preference.js`.

## Deploy (Vercel)

1. En [vercel.com](https://vercel.com), "Add New Project" → importar este repo de GitHub.
2. En Settings → Environment Variables, agregar:
   - `MP_ACCESS_TOKEN`: el Access Token de producción de tu cuenta de Mercado Pago (Tu negocio → Configuración → Credenciales → Credenciales de producción).
3. Deploy. Cada push a `main` vuelve a desplegar solo.

## Desarrollo local

No hace falta build. Para probar la función de Mercado Pago local hace falta la Vercel CLI (`npm i -g vercel` → `vercel dev`) y una variable `MP_ACCESS_TOKEN` en `.env.local`.
