import { useState } from 'react'
import { IMAGES } from '../../utils/images'
import s from './Gallery.module.css'

const TABS = [
  { key:'exterior',  label:'Exterior & Parque' },
  { key:'pileta',    label:'Piscina & Jacuzzi' },
  { key:'interior',  label:'Interiores' },
  { key:'amenities', label:'Amenities' },
]

export default function Gallery() {
  const [active, setActive] = useState('exterior')
  const [lb, setLb] = useState(null)
  const imgs = IMAGES[active] ?? []
  return (
    <section className={`section ${s.wrap}`} id="galeria">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Fotos reales del complejo</p>
          <h2 className={s.h2}>El entorno que te espera</h2>
        </div>
        <div className={`reveal ${s.tabs}`}>
          {TABS.map(t => (
            <button key={t.key} className={`${s.tab} ${active===t.key?s.tabActive:''}`} onClick={() => setActive(t.key)}>
              {t.label}
              <span className={s.cnt}>{IMAGES[t.key]?.length}</span>
            </button>
          ))}
        </div>
        <div className={`stagger ${s.grid}`}>
          {imgs.map((img,i) => (
            <div key={img.id} className={`reveal-scale ${s.item} ${i===0?s.featured:''}`} style={{transitionDelay:`${i*.07}s`}} onClick={() => setLb(img)}>
              <img src={img.src} alt={img.alt} loading="lazy" className={s.img}/>
              <div className={s.overlay}>
                <span className={s.imgLabel}>{img.label}</span>
                <span className={s.zoom}>↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lb && (
        <div className={s.lb} onClick={() => setLb(null)}>
          <button className={s.lbClose} onClick={() => setLb(null)}>✕</button>
          <img src={lb.src} alt={lb.alt} className={s.lbImg} onClick={e => e.stopPropagation()}/>
          <p className={s.lbCaption}>{lb.alt}</p>
        </div>
      )}
    </section>
  )
}
