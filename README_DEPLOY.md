Despliegue y SEO - Instrucciones rápidas

1) Preparar build (local)

- Instalar dependencias y generar la build con Vite:

```powershell
cd C:\Users\SA1880\ludes
npm install
npm run build
npm run preview   # para previsualizar la build localmente
```

2) Desplegar en Vercel (recomendado, gratuito y con CDN/SSL automático)

- Subir tu proyecto a GitHub (asegúrate de que el repo exista y está actualizado).
- Ir a https://vercel.com, conectar tu cuenta GitHub y seleccionar el repo `ludes`.
- Vercel detecta Vite automáticamente. Build command: `npm run build`. Output: `dist`.
- Deploy y Vercel te dará una URL pública con HTTPS.
- Para dominio propio: Domains → Add Domain → seguir instrucciones DNS.

3) Alternativas: Netlify, Cloudflare Pages, GitHub Pages

- Netlify: conectar repo y configurar build `npm run build` / publish `dist`.
- Cloudflare Pages: conectar repo, build command `npm run build`, output `dist`.
- GitHub Pages: requiere `gh-pages` o usar la carpeta `dist` y configurar `base` en `vite.config.ts`.

4) SEO básico (ya incluido en el proyecto)

- `index.html` incluye `meta description`, `og:` tags, `canonical` y enlace a `sitemap.xml`.
- `public/robots.txt` y `public/sitemap.xml` creados. Reemplaza `https://your-domain.example/` con tu dominio real una vez lo tengas.

5) Hacer la web indexable por Google

- Una vez subida la web a un dominio público (ej. `https://mi-dominio.com`):
  - Accede a Google Search Console (https://search.google.com/search-console) y añade tu sitio.
  - En la sección de Sitemaps, envía `https://mi-dominio.com/sitemap.xml`.
  - Opcional: agregar propiedad en Bing Webmaster Tools.

6) Opcional: Analytics y control

- Agrega Google Analytics o Matomo para medir visitas.
- Habilita HTTPs y revisa el rendimiento en PageSpeed.

7) Nota sobre assets

- Coloca imágenes estáticas en `public/assets/` y referencia `/assets/nombre.jpg`.
- Asegúrate de que `public/sitemap.xml` y `public/robots.txt` tengan URLs absolutas que apunten a tu dominio final.

Si quieres, puedo:
- Actualizar `sitemap.xml` con tu dominio final cuando me lo indiques.
- Crear el deploy en Vercel paso a paso y guiarte con las capturas de pantalla.
- Generar un `workflow` GitHub Actions para build y deploy automático (si prefieres usar GitHub Pages o un servidor propio).
