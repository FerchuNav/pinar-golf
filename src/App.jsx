import { useEffect } from 'react'
import Navbar        from './components/Navbar/Navbar'
import Hero          from './sections/Hero/Hero'
import Features      from './sections/Features/Features'
import Gallery       from './sections/Gallery/Gallery'
import Rooms         from './sections/Rooms/Rooms'
import Amenities     from './sections/Amenities/Amenities'
import Experiences   from './sections/Experiences/Experiences'
import Comparison    from './sections/Comparison/Comparison'
import Reviews       from './sections/Reviews/Reviews'
import Booking       from './sections/Booking/Booking'
import Location      from './sections/Location/Location'
import Footer        from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Rooms />
        <Amenities />
        <Experiences />
        <Comparison />
        <Reviews />
        <Booking />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
