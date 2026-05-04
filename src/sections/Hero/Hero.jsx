import s from './Hero.module.css'

const STATS = [
  {v:'8.7', l:'Booking.com'},
  {v:'5',   l:'Cabañas exclusivas'},
  {v:'365', l:'Días al año'},
  {v:'24hs',l:'Piscina climatizada'},
]

export default function Hero() {
  return (
    <section className={s.hero} id="inicio">
      <video className={s.video} autoPlay muted loop playsInline preload="auto"
        poster="/images/exterior/vista-aerea.jpg">
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={s.overlay}/>
      <div className={`container ${s.content}`}>
        <div className={s.badge}>
          <span style={{fontSize:'.72rem',letterSpacing:'.18em',textTransform:'uppercase',fontFamily:'monospace'}}>
            ⛳ Barrio Parque Golf · Sierra de la Ventana
          </span>
        </div>
        <h1 className={s.title}>
          Tu refugio en el<br/><em>corazón</em> de la Comarca
        </h1>
        <p className={s.sub}>
          5 cabañas de diseño premium con piscina climatizada 24hs,
          jacuzzi y el Parque Tornquist a pasos de tu puerta.
        </p>
        <div className={s.btns}>
          <a href="#reservar" className="btn btn-gold">Reservar ahora</a>
          <a href="#galeria"  className="btn btn-outline">Ver el complejo</a>
        </div>
      </div>
      <div className={s.stats}>
        {STATS.map(s2 => (
          <div key={s2.l} className={s.stat}>
            <strong className={s.statVal}>{s2.v}</strong>
            <span className={s.statLbl}>{s2.l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
