import s from './Rooms.module.css'

export default function Rooms() {
  return (
    <section className={`section ${s.wrap}`} id="cabanas">
      <div className="container">
        <div className={`reveal ${s.hdr}`}>
          <span className="gold-line" style={{background:'var(--gold)'}}/>
          <p className="label" style={{color:'var(--gold)',marginBottom:'.5rem'}}>Nuestras unidades</p>
          <h2 className={s.h2}>5 Cabañas + 1 Departamento</h2>
          <p className={s.sub}>
            Todas las unidades cuentan con construcción Retak de alta eficiencia térmica,
            2 piletas (cubierta climatizada + al aire libre), y acceso directo al Parque Tornquist.
            Diseñadas para parejas, familias y grupos que buscan el mejor descanso en la Comarca.
          </p>
        </div>

        <div className={`reveal ${s.info}`}>
          <div className={s.features}>
            <Feat icon="🛏" text="Dormitorios con sommier King Koil" />
            <Feat icon="🛁" text="Baño privado con bidé y secador de pelo" />
            <Feat icon="🍳" text="Cocina completa: hornalla, horno, microondas" />
            <Feat icon="🌡" text="Calefacción dual + Aire A/C" />
            <Feat icon="📺" text="TV de pantalla plana" />
            <Feat icon="🛋" text="Zona de estar con sofá y sofá cama" />
            <Feat icon="🐾" text="Pet-friendly · Gratis" />
            <Feat icon="🔒" text="Caja de seguridad individual" />
            <Feat icon="📶" text="WiFi gratis en todo el establecimiento" />
            <Feat icon="🚗" text="Estacionamiento gratuito · Sin reserva" />
          </div>
          <p className={s.note}>
            Consultanos por WhatsApp para conocer disponibilidad, precios y la unidad que mejor se adapte a tu grupo.
          </p>
          <a href="https://wa.me/5492914260589?text=Hola!%20Quisiera%20conocer%20las%20caba%C3%B1as%20disponibles%20y%20precios." target="_blank" rel="noopener" className={`btn btn-gold ${s.cta}`}>
            Consultar disponibilidad y precios
          </a>
        </div>
      </div>
    </section>
  )
}

function Feat({icon, text}) {
  return (
    <div className={s.feat}>
      <span className={s.featIcon}>{icon}</span>
      <span>{text}</span>
    </div>
  )
}
