/**
 * CATÁLOGO DE IMÁGENES — Pinar Golf Cabañas Resort
 * ─────────────────────────────────────────────────
 * Las fotos están en /public/images/ organizadas por tema:
 *   /pileta/     → piscinas y jacuzzi
 *   /exterior/   → fachada, jardines, parque, nieve
 *   /interior/   → dormitorios, living, cocina, baños
 *   /amenities/  → quincho, parrilla, metegol
 *
 * Para cambiar una foto: reemplazá el archivo en la carpeta
 * correspondiente manteniendo el mismo nombre.
 * Para agregar fotos nuevas: copiá el archivo y agregá una
 * entrada en el array de abajo.
 */

export const IMAGES = {
  pileta: [
    { id:'pil-01', src:'/images/pileta/pileta-cubierta-01.jpg',  alt:'Piscina cubierta climatizada con vista al jardín',          label:'Piscina Cubierta',    featured:true  },
    { id:'pil-02', src:'/images/pileta/pileta-cubierta-02.jpg',  alt:'Piscina cubierta con techo traslúcido',                     label:'Piscina Cubierta',    featured:true  },
    { id:'pil-03', src:'/images/pileta/pileta-cubierta-03.jpg',  alt:'Piscina cubierta — vista frontal con reposeras',            label:'Piscina Cubierta',    featured:false },
    { id:'pil-04', src:'/images/pileta/pileta-invierno-01.jpg',  alt:'Piscina cubierta en invierno con flotadores',              label:'Piscina en Invierno', featured:false },
    { id:'pil-05', src:'/images/pileta/jacuzzi-01.jpg',          alt:'Jacuzzi terapéutico exterior',                              label:'Jacuzzi',             featured:true  },
    { id:'pil-06', src:'/images/pileta/jacuzzi-02.jpg',          alt:'Jacuzzi exterior detalle',                                  label:'Jacuzzi',             featured:false },
    { id:'pil-07', src:'/images/pileta/complejo-pileta.jpg',     alt:'Vista del complejo con piscina y jacuzzi exterior',        label:'Complejo',            featured:true  },
  ],
  exterior: [
    { id:'ext-01', src:'/images/exterior/vista-aerea.jpg',              alt:'Vista aérea del complejo con las sierras de fondo',          label:'Vista Aérea',          featured:true  },
    { id:'ext-02', src:'/images/exterior/fachada-estacionamiento.jpg',  alt:'Fachada con estacionamiento cubierto',                      label:'Fachada',              featured:true  },
    { id:'ext-03', src:'/images/exterior/pergola-flores-02.jpg',        alt:'Pérgola con sillones de madera y flores lilas',             label:'Pérgola',              featured:true  },
    { id:'ext-04', src:'/images/exterior/pergola-flores-03.jpg',        alt:'Pérgola ángulo 3 — sillones y living exterior',             label:'Pérgola',              featured:false },
    { id:'ext-05', src:'/images/exterior/bicicletas-parque.jpg',        alt:'Bicicletas gratuitas en el parque',                         label:'Bicicletas',           featured:false },
    { id:'ext-06', src:'/images/exterior/juegos-infantiles-01.jpg',     alt:'Juegos infantiles de madera en el parque',                  label:'Parque Infantil',      featured:false },
    { id:'ext-07', src:'/images/exterior/juegos-infantiles-02.jpg',     alt:'Tobogán y hamaca infantil de madera',                       label:'Parque Infantil',      featured:false },
    { id:'ext-08', src:'/images/exterior/picnic-arbol.jpg',             alt:'Mesa de picnic bajo árbol centenario',                      label:'Parque',               featured:false },
    { id:'ext-09', src:'/images/exterior/nieve-02.jpg',                 alt:'Piscina y jacuzzi con nieve — invierno 2025',              label:'Nieve',                featured:true  },
    { id:'ext-10', src:'/images/exterior/ventana-flores.jpg',           alt:'Ventana con flores y vista al jardín',                      label:'Vista desde la cabaña',featured:false },
  ],
  interior: [
    { id:'int-01', src:'/images/interior/dormitorio-01.jpg',    alt:'Dormitorio con cama doble y ventanal con vista a la piscina', label:'Dormitorio',      featured:true  },
    { id:'int-02', src:'/images/interior/living-01.jpg',        alt:'Living con sillón negro, sillas rojas y ventanal',           label:'Living',          featured:true  },
    { id:'int-03', src:'/images/interior/living-comedor-01.jpg',alt:'Living-comedor con mesa, cocina integrada y ventanales',     label:'Living-Comedor',  featured:true  },
    { id:'int-04', src:'/images/interior/living-02.jpg',        alt:'Living con sillón y acceso al deck exterior',               label:'Living',          featured:false },
    { id:'int-05', src:'/images/interior/cocina-01.jpg',        alt:'Cocina con barra americana, taburetes y muebles modernos',  label:'Cocina',          featured:true  },
    { id:'int-06', src:'/images/interior/bano-01.jpg',          alt:'Baño moderno con toallero calefactor y porcelanato',        label:'Baño',            featured:true  },
  ],
  amenities: [
    { id:'ame-01', src:'/images/amenities/quincho-interior.jpg', alt:'Quincho cerrado con mesas de madera y TV', label:'Quincho',       featured:true  },
    { id:'ame-02', src:'/images/amenities/parrilla-quincho.jpg', alt:'Parrilla del quincho — fogón amplio',      label:'Parrilla',      featured:true  },
    { id:'ame-03', src:'/images/amenities/cocina-quincho.jpg',   alt:'Cocina del quincho — mesada equipada',     label:'Cocina Quincho',featured:false },
    { id:'ame-04', src:'/images/amenities/metegol.jpg',          alt:'Metegol en el quincho',                    label:'Metegol',       featured:false },
  ],
}

export const get = (cat, id) => IMAGES[cat]?.find(i => i.id === id)
export const featured = (cat) => IMAGES[cat]?.filter(i => i.featured) ?? []
