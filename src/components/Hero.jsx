import { motion } from 'framer-motion'
import { profile } from '../data/content'

const word = {
  hidden: { opacity: 0, y: 60, rotate: 4 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const words = [profile.name.split(' ')[0], profile.name.split(' ')[1]]

  return (
    <section id="inicio" className="relative flex items-center px-4 pb-20 pt-24 sm:px-6 sm:pt-28 lg:min-h-[88vh]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink/40 bg-pink/10 px-4 py-1.5 text-sm text-cream"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-pink" />
            {profile.role} · {profile.yearsLabel} de experiencia
          </motion.span>

          <h1 className="font-display text-6xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
            {words.map((w, i) => (
              <span key={w} className="block overflow-hidden pb-2">
                <motion.span
                  custom={i}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className={`inline-block ${i === 1 ? 'text-gradient italic' : ''}`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 max-w-md text-lg text-cream/75"
          >
            Tengo {profile.age} años y hago que las marcas se vean, se sientan y se recuerden.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="rounded-full bg-gradient-to-r from-violet to-pink px-8 py-3.5 font-medium text-white shadow-lg shadow-pink/30 transition hover:scale-105 hover:shadow-pink/50"
            >
              Trabajemos juntas
            </a>
            <a
              href="#sobre-mi"
              className="rounded-full border border-cream/30 px-8 py-3.5 font-medium transition hover:border-cream hover:bg-cream hover:text-ink"
            >
              Conóceme
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 animate-spin-slow rounded-[2.5rem] bg-[conic-gradient(from_0deg,#C35CFF,#FF2EA8,#FFFEB5,#C35CFF)] opacity-70 blur-xl" />
          <div className="relative aspect-[4/5] animate-float overflow-hidden rounded-[2.5rem] border-4 border-cream/20 bg-gradient-to-br from-violet via-pink to-cream">
            {profile.photo ? (
              <img src={profile.photo} alt={`${profile.name} ${profile.lastName}`} className="h-full w-full object-cover object-top" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-ink">
                <span className="font-display text-8xl font-extrabold">AB</span>
                <span className="mt-2 text-sm font-medium opacity-70">Tu foto aquí</span>
              </div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="glass absolute -bottom-6 -left-2 sm:-left-6 px-5 py-3"
          >
            <p className="font-display text-3xl font-extrabold text-cream">{profile.years}+</p>
            <p className="text-xs text-cream/70">años impulsando marcas</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute -right-2 top-8 rotate-6 sm:-right-4 rounded-2xl bg-cream px-4 py-2 text-sm font-bold text-ink shadow-xl"
          >
            ✨ Brand lover
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.6, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-cream/60 md:block"
        aria-label="Bajar"
      >
        ↓
      </motion.a>
    </section>
  )
}
