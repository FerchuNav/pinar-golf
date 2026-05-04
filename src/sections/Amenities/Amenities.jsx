import s from './Amenities.module.css'
const CHIPS = [
  {icon:'🏊',t:'Piscina cubierta',  sub:'Climatizada 24hs · Todo el año'},
  {icon:'🌊',t:'Jacuzzi terapéutico',sub:'Temperatura controlada'},
  {icon:'👶',t:'Pileta infantil',    sub:'Climatizada · Segura'},
  {icon:'🔥',t:'Quincho cerrado',    sub:'Parrilla · TV · Metegol'},
  {icon:'🚲',t:'Bicicletas gratis',  sub:'Explorá el Barrio Golf'},
  {icon:'🌿',t:'Parque amplio',      sub:'Decks · Reposeras · Juegos'},
  {icon:'⚡',t:'Cargador eléctrico', sub:'Para autos EV e híbridos'},
  {icon:'🧹',t:'Mucama diaria',      sub:'Ropa blanca premium'},
]
const PHOTOS = [
  {src:'/images/pileta/pileta-cubierta-02.jpg',  alt:'Piscina cubierta climatizada', wide:true},
  {src:'/images/amenities/quincho-interior.jpg', alt:'Quincho cerrado con TV y mesas', wide:false},
  {src:'/images/amenities/parrilla-quincho.jpg', alt:'Parrilla del quincho', wide:false},
  {src:'/images/pileta/jacuzzi-exterior.jpg',    alt:'Jacuzzi terapéutico', wide:true},
]
export default function Amenities() {
  return (
    <section className={`section ${s.wrap}`} id="servicios">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Todo incluido</p>
          <h2 className={s.h2}>Servicios y amenities</h2>
          <p className={s.sub}>Un micro-ecosistema de disfrute, independientemente del clima o la estación del año.</p>
        </div>
        <div className={`reveal ${s.photos}`}>
          {PHOTOS.map(p => (
            <div key={p.src} className={`${s.photo} ${p.wide?s.wide:''}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className={s.pImg}/>
              <div className={s.pLabel}>{p.alt}</div>
            </div>
          ))}
        </div>
        <div className={s.chips}>
          {CHIPS.map((c,i) => (
            <div key={c.t} className={`reveal ${s.chip}`} style={{transitionDelay:`${i*.06}s`}}>
              <span className={s.chipIcon}>{c.icon}</span>
              <div>
                <p className={s.chipTitle}>{c.t}</p>
                <p className={s.chipSub}>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
