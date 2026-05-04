# Pinar Golf Cabañas Resort — Sitio Web

React + Vite · Listo para Vercel

## Estructura del proyecto

```
pinar-golf/
├── public/
│   └── images/
│       ├── pileta/       ← fotos de piscinas y jacuzzi
│       ├── exterior/     ← fachada, jardines, nieve, parque
│       ├── interior/     ← dormitorios, living, cocina, baños
│       ├── amenities/    ← quincho, parrilla, metegol
│       └── hero-video.mp4
├── src/
│   ├── sections/         ← cada sección de la página (independiente)
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Gallery/
│   │   ├── Rooms/
│   │   ├── Amenities/
│   │   ├── WinterBanner/
│   │   ├── Comparison/
│   │   ├── Reviews/
│   │   ├── Booking/
│   │   └── Location/
│   ├── components/       ← componentes reutilizables
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── WhatsAppFloat/
│   ├── utils/
│   │   └── images.js     ← ⭐ CATÁLOGO DE FOTOS (editá acá)
│   └── styles/
│       └── global.css
```

## Cómo agregar o cambiar fotos

1. Copiá la foto a la carpeta correspondiente en `/public/images/<categoria>/`
2. Abrí `src/utils/images.js`
3. Agregá o modificá la entrada en el array de la categoría

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo en localhost:5173
npm run build     # build para producción
```

## Deploy en Vercel

1. Subí la carpeta a GitHub
2. En vercel.com → New Project → importá el repo
3. Framework: Vite (se detecta automáticamente)
4. Deploy → listo

