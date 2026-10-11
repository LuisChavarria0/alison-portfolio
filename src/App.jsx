import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Blobs } from './components/ui'
import { About, Contact, Experience, Footer, Gallery, Marquee, Services, WhatsAppFloat } from './components/Sections'

export default function App() {
  return (
    <div className="grain relative overflow-x-hidden">
      <Blobs />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
