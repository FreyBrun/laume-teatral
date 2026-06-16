# LAUME Teatral — sitio web

Sitio de **LAUME Teatral**, compañía teatral de mujeres en la Ciudad de México.
Estética de objeto en pergamino, por capas y de recorrido no lineal, con la obra
en cartel **«No es ficción»**.

Hecho con **Next.js (App Router) + TypeScript + CSS Modules**. Sin CMS: todo el
contenido vive en archivos de datos tipados para que la colectiva lo edite por
*pull request*. Todo en español.

## Correr el sitio

```bash
npm install      # solo la primera vez
npm run dev      # desarrollo → http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build
```

## Estructura

```
app/
  page.tsx                  Home — título + cartel, e índice de fragmentos
  obra/[slug]/              Detalle de obra (sala de exposición + marginalia)
  umbral/                   Boletos — "el umbral" (registro oscuro)
  colectiva/                La colectiva + las integrantes
  colectiva/[slug]/         Ficha individual de cada integrante
  icon.png                  Favicon (logo)
  globals.css               Tokens de diseño (color, tipografía, sombra)
components/                  Header, Footer, Figure (slot de imagen), Umbral
data/                        ← AQUÍ se edita el contenido
  members.ts                Las integrantes
  shows.ts                  Las obras
lib/site.ts                 Identidad + datos de boletos (WhatsApp)
public/img/                 Fotos optimizadas, cartel y logo
```

## Cómo editar el contenido (sin tocar el diseño)

### Las integrantes — `data/members.ts`
Cada integrante es un objeto del arreglo `members`. Agregar o quitar a alguien =
editar el arreglo; la página se reacomoda sola (misma escala, sin jerarquía).

- `bioEs` — una línea, aparece en la cuadrícula de *La colectiva*.
- `fullBioEs` — biografía completa, aparece en su ficha individual.
- `portrait` — ruta a la foto en `/public/img`. **Si se omite, se muestra el
  estado vacío diseñado** (textura diagonal). → *Zaira Barrera* aún no tiene
  retrato: agrega `public/img/zaira.jpg` y descomenta su campo `portrait`.

### Las obras — `data/shows.ts`
Cada obra es un objeto del arreglo `shows`. El archivo de obras pasadas es el
mismo arreglo filtrado por `status` (`actual` | `proxima` | `pasada`). «No es
ficción» ya trae los datos del cartel oficial (dramaturgia y dirección, foro,
funciones, clasificación, reparto).

### Boletos (el umbral) — `lib/site.ts`
**El sitio no cobra en línea.** La página `/umbral` muestra funciones, foro y
clasificación, y manda a la gente a **WhatsApp** (o a la taquilla). El enlace y
el teléfono viven en `TICKETS` (`lib/site.ts`).

### Identidad y contacto — `lib/site.ts`
Dominio, descripción, **Instagram** y correo. Instagram y correo están vacíos: al
llenarlos aparecen automáticamente en el pie de página.

## Imágenes

Optimizadas en `public/img/`:

- Retratos: `ann.jpg`, `cristina.jpg`, `haydee.jpg`, `maria.jpg`, `yazmin.jpg`.
- `cartel-no-es-ficcion.jpg` — el cartel oficial (portada + obra).
- `obra-hero.jpg`, `colectiva.jpg`, `material-1..3.jpg` — fotos de la colectiva.
- `logo-mark.png` / `logo-full.png` — el logo con fondo transparente (header y
  usos generales); `app/icon.png` es el favicon.

Para cambiar cualquiera, reemplaza el archivo o edita la ruta en los datos. Todas
pasan por un marco uniforme (borde, recorte `cover`, sombra interior), así que
fotos de calidad distinta se ven como un mismo conjunto curado.

## Accesibilidad

El orden del DOM es el orden de lectura (rotaciones y traslapes son decorativos),
foco visible, `prefers-reduced-motion` respetado y textos `alt` en cada foto.

## Deploy

Sitio estático (SSG). Listo para **Vercel** o **Netlify**: conecta el repo y usa
los comandos por defecto de Next.js. No requiere servidor ni base de datos.

## Pendientes

- Instagram y correo de contacto (`lib/site.ts`).
- Dominio final (`SITE.url`).
- Retrato de Zaira Barrera (opcional).
