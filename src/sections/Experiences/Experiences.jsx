import s from './Experiences.module.css'

const EXPERIENCES = [
  { icon:'🥾', title:'Senderismo', desc:'Cerro Ventana, Cerro Tres Picos y decenas de circuitos en el Parque Tornquist.' },
  { icon:'🏌', title:'Golf', desc:'Campo de golf de 9 hoyos dentro del Barrio Parque Golf.' },
  { icon:'🐴', title:'Cabalgatas', desc:'Recorridos a caballo por sierras, arroyos y paisajes únicos.' },
  { icon:'🍷', title:'Ruta del Vino', desc:'Bodegas artesanales de la Comarca Andina y Sierra de la Ventana.' },
  { icon:'🦅', title:'Fauna Silvestre', desc:'Águilas, caranchos, liebres y ciervos en su hábitat natural.' },
  { icon:'🏊', title:'Termas', desc:'Aguas termales en Villa Ventanas y alrededores.' },
]

export default function Experiences() {
  return (
    <section className={`section ${s.wrap}`} id="experiencias">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line"/>
          <p className="label" style={{color:'var(--forest-light)',marginBottom:'.5rem'}}>Qué hacer en la zona</p>
          <h2 className={s.h2}>Experiencias en la Comarca</h2>
          <p className={s.sub}>Sierra de la Ventana es mucho más que cabañas. Descubrí actividades para todos los gustos a minutos de tu puerta.</p>
        </div>
        <div className={s.grid}>
          {EXPERIENCES.map((e,i) => (
            <div key={e.title} className={`reveal ${s.card}`} style={{transitionDelay:`${i*.08}s`}}>
              <div className={s.icon}>{e.icon}</div>
              <h3 className={s.cardTitle}>{e.title}</h3>
              <p className={s.cardDesc}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
