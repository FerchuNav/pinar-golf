import s from './Experiences.module.css'

const EXPERIENCES = [
  { img:'/images/exterior/vista-aerea.jpg',     title:'Senderismo',         desc:'Cerro Ventana, Cerro Tres Picos y decenas de circuitos en el Parque Tornquist.' },
  { img:'/images/exterior/bicicletas-parque.jpg', title:'Golf & Bicicletas', desc:'Campo de golf de 9 hoyos dentro del Barrio Parque Golf. Bicicletas incluidas.' },
  { img:'/images/exterior/picnic-arbol.jpg',    title:'Cabalgatas',         desc:'Recorridos a caballo por sierras, arroyos y paisajes únicos.' },
  { img:'/images/exterior/ventana-flores.jpg',  title:'Fauna Silvestre',    desc:'Águilas, caranchos, liebres y ciervos en su hábitat natural.' },
  { img:'/images/exterior/juegos-infantiles-01.jpg', title:'Parque Infantil', desc:'Juegos de madera, tobogán y hamacas para los más chicos.' },
  { img:'/images/exterior/nieve-02.jpg',        title:'Nieve en Invierno',  desc:'Sierra de la Ventana se transforma con la nieve — una experiencia mágica.' },
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
              <div className={s.imgWrap}>
                <img src={e.img} alt={e.title} loading="lazy" className={s.img}/>
              </div>
              <div className={s.body}>
                <h3 className={s.cardTitle}>{e.title}</h3>
                <p className={s.cardDesc}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
