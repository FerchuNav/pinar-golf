import s from './Rooms.module.css'
const ROOMS = [
  {
    name:'Suite Garden', tag:'Hasta 2 personas', target:'⛺ Parejas · Relax de alta gama',
    img:'/images/interior/dormitorio-01.jpg',
    feats:['Sommier King Koil de última generación','Bañera con hidromasaje privado','Cocina con barra americana equipada','Living con ventanal panorámico al jardín','Baño con toallero calefactor','Calefacción por radiadores + Aire A/C'],
    wsp:'Hola%20Lucas!%20Me%20interesa%20la%20Suite%20Garden%20(1%20dormitorio).%20%C2%BFTienen%20disponibilidad%3F',
  },
  {
    name:'Dúplex Ventana', tag:'Hasta 6 personas', target:'🏡 Familias · Grupos · Aventura serrana',
    img:'/images/interior/living-comedor-01.jpg',
    feats:['Dos plantas con terraza panorámica','Dormitorios en planta baja y alta','2 baños completos + hidromasaje','Living-comedor con ventanales panorámicos','Heladera familiar + cocina completa','Calefacción dual + A/C en ambas plantas'],
    wsp:'Hola%20Lucas!%20Me%20interesa%20el%20D%C3%BAplex%20Ventana%20(2%20dormitorios).%20%C2%BFTienen%20disponibilidad%3F',
  },
]
export default function Rooms() {
  return (
    <section className={`section ${s.wrap}`} id="cabanas">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" style={{background:'var(--gold)'}}/>
          <p className="label" style={{color:'var(--gold)',marginBottom:'.5rem'}}>Nuestras unidades</p>
          <h2 className={s.h2}>Elegí tu cabaña ideal</h2>
        </div>
        <div className={s.grid}>
          {ROOMS.map((r,i) => (
            <div key={r.name} className={`reveal ${s.card}`} style={{transitionDelay:`${i*.15}s`}}>
              <div className={s.imgWrap}>
                <img src={r.img} alt={r.name} loading="lazy" className={s.img}/>
                <span className={s.tag}>{r.tag}</span>
              </div>
              <div className={s.body}>
                <p className="label" style={{color:'var(--gold-light)',marginBottom:'.35rem'}}>{r.target}</p>
                <h3 className={s.name}>{r.name}</h3>
                <ul className={s.feats}>
                  {r.feats.map(f => <li key={f} className={s.feat}><span className={s.check}>✓</span>{f}</li>)}
                </ul>
                <a href={`https://wa.me/5492914260589?text=${r.wsp}`} target="_blank" rel="noopener" className={`btn btn-gold ${s.cta}`}>
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
