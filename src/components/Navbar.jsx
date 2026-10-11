import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Lo que hago' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-ink/70 py-3 backdrop-blur-xl' : 'py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="font-display text-2xl font-extrabold">
          <span className="text-gradient">Alison</span>
          <span className="text-pink">.</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative text-sm text-cream/80 transition hover:text-cream">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-violet to-pink transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menú"
        >
          <span className={`h-0.5 w-6 bg-cream transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-cream transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-cream transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-4 mt-3 flex flex-col gap-4 p-6 md:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-lg">
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}

      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-violet via-pink to-cream"
      />
    </motion.header>
  )
}
