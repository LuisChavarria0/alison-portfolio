import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, y = 40, x = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ kicker, children }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-pink">{kicker}</p>
      <h2 className="font-display text-4xl font-extrabold sm:text-5xl">{children}</h2>
    </Reveal>
  )
}

export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-violet/40 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-pink/30 blur-3xl [animation-delay:-5s]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-cream/15 blur-3xl [animation-delay:-9s]" />
    </div>
  )
}
