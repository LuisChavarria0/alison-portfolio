import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, SectionTitle } from './ui'
import { credentials, experience, intro, profile, skills, stats } from '../data/content'

export function Marquee() {
  const items = ['Branding', 'Contenido', 'Redes sociales', 'Activaciones', 'Promoción', 'Creatividad']
  const row = [...items, ...items]
  return (
    <div className="relative -rotate-2 overflow-hidden bg-gradient-to-r from-violet via-pink to-violet py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl font-extrabold italic text-cream">
            {t} <span className="text-ink">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-16 px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle kicker="Sobre mí">
          Un poquito de <span className="text-gradient italic">mi historia</span>
        </SectionTitle>

        <div className="glass relative overflow-hidden p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-pink/20 blur-3xl" />
          <span className="absolute left-6 top-2 font-display text-8xl text-violet/40">“</span>
          <div className="relative space-y-5 pt-6 text-lg leading-relaxed text-cream/85 sm:text-xl">
            {intro.map((p, i) => (
              <Reveal key={i} delay={i * 0.12} y={20}>
                <p className={i === 0 ? 'font-medium text-cream' : ''}>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5} className="relative mt-8 text-right">
            <p className="font-display text-2xl italic text-gradient">— {profile.name} {profile.lastName}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="glass group p-6 text-center transition hover:-translate-y-1 hover:border-pink/40">
                <p className="font-display text-5xl font-extrabold text-gradient">{s.value}</p>
                <p className="mt-2 text-sm text-cream/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={0.3 + i * 0.1}>
              <div className="glass flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-violet/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-pink text-2xl shadow-lg shadow-pink/30">
                  {c.icon}
                </div>
                <div>
                  <p className="font-bold">{c.title}</p>
                  <p className="text-sm text-cream/70">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-16 px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-12">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Lo que hago">
          Cómo <span className="text-gradient italic">impulso</span> tu marca
        </SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }}
                className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-violet/60 via-pink/40 to-cream/20 p-px"
              >
                <div className="h-full rounded-3xl bg-plum/95 p-7 transition group-hover:bg-plum/80">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink to-violet text-2xl shadow-lg shadow-pink/30 transition group-hover:scale-110">
                    {s.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p className="text-cream/70">{s.text}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function useLightbox(count) {
  const [active, setActive] = useState(null)
  const prev = () => setActive((i) => (i - 1 + count) % count)
  const next = () => setActive((i) => (i + 1) % count)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const modal = (
    <AnimatePresence>
      {active !== null && (
        <Lightbox item={experience[active]} onClose={() => setActive(null)} onPrev={prev} onNext={next} />
      )}
    </AnimatePresence>
  )
  return { open: setActive, modal }
}

function ExperienceCard({ e, i, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="glass group relative w-full overflow-hidden px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-pink/50 hover:shadow-xl hover:shadow-pink/20 sm:px-6 sm:py-5"
    >
      <span className="pointer-events-none absolute -right-1 -top-4 font-display text-6xl font-extrabold text-violet/15 transition group-hover:text-pink/25 sm:text-7xl">
        {String(i + 1).padStart(2, '0')}
      </span>
      <div className="relative flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h3 className="font-display text-lg font-extrabold leading-tight sm:text-xl">{e.place}</h3>
        {e.image && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-pink px-3 py-1 text-xs font-medium text-white shadow-md shadow-pink/20 transition group-hover:scale-105">
            📸 Ver foto
          </span>
        )}
      </div>
      <p className="relative mt-2 text-sm leading-relaxed text-cream/75 sm:text-base">{e.text}</p>
    </button>
  )
}

const dot = 'absolute top-6 h-4 w-4 rounded-full border-4 border-ink bg-pink shadow-[0_0_16px_#FF2EA8]'

export function Experience() {
  const { open, modal } = useLightbox(experience.length)
  const items = experience.map((e, i) => ({ e, i }))
  const left = items.filter(({ i }) => i % 2 === 0)
  const right = items.filter(({ i }) => i % 2 === 1)

  return (
    <section id="experiencia" className="scroll-mt-16 px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle kicker="Experiencia">
          Lugares donde he <span className="text-gradient italic">brillado</span>
        </SectionTitle>

        {/* Móvil / tablet: una columna */}
        <div className="relative lg:hidden">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-violet via-pink to-cream" />
          {items.map(({ e, i }) => (
            <Reveal key={e.place} y={24}>
              <div className="relative mb-5 pl-9 sm:mb-6 sm:pl-10">
                <span className={`${dot} left-[5px]`} />
                <ExperienceCard e={e} i={i} onOpen={() => open(i)} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Escritorio: dos columnas intercaladas */}
        <div className="relative hidden grid-cols-2 gap-x-16 lg:grid">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet via-pink to-cream" />
          <div className="space-y-6">
            {left.map(({ e, i }) => (
              <Reveal key={e.place} x={-40} y={0}>
                <div className="relative">
                  <span className={`${dot} -right-10`} />
                  <ExperienceCard e={e} i={i} onOpen={() => open(i)} />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="space-y-6 pt-20">
            {right.map(({ e, i }) => (
              <Reveal key={e.place} x={40} y={0} delay={0.1}>
                <div className="relative">
                  <span className={`${dot} -left-10`} />
                  <ExperienceCard e={e} i={i} onOpen={() => open(i)} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      {modal}
    </section>
  )
}

export function Gallery() {
  const { open, modal } = useLightbox(experience.length)

  return (
    <section id="galeria" className="scroll-mt-16 px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle kicker="Galería">
          Mi trabajo en <span className="text-gradient italic">imágenes</span>
        </SectionTitle>
        <div className="flex flex-wrap justify-center gap-5">
          {experience.map((e, i) =>
            e.image ? (
              <Reveal key={e.image} delay={(i % 4) * 0.08} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]">
                <button type="button" onClick={() => open(i)} className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl">
                  <img src={e.image} alt={e.place} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/90 via-pink/10 to-transparent p-5 text-left opacity-0 transition duration-500 group-hover:opacity-100">
                    <p className="translate-y-4 font-medium transition duration-500 group-hover:translate-y-0">{e.place}</p>
                  </div>
                </button>
              </Reveal>
            ) : null,
          )}
        </div>
      </div>
      {modal}
    </section>
  )
}


function Lightbox({ item, onClose, onPrev, onNext }) {
  const arrow =
    'absolute bottom-6 z-10 flex h-12 w-12 items-center sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 justify-center rounded-full bg-cream/90 text-2xl text-ink shadow-xl transition hover:scale-110 hover:bg-cream'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={item.place}
    >
      <motion.figure
        key={item.image}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 flex w-full max-w-2xl flex-col items-center sm:mb-0"
      >
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <img
            src={item.image}
            alt={item.place}
            className="mx-auto block max-h-[58vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl shadow-black/50 sm:max-h-[70vh]"
          />
          <button onClick={onClose} aria-label="Cerrar" className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-xl text-cream backdrop-blur transition hover:bg-pink">
            ✕
          </button>
        </div>
        <figcaption
          onClick={(e) => e.stopPropagation()}
          className="mt-4 w-full max-w-xl rounded-2xl border border-white/10 bg-plum/90 px-6 py-4 text-center shadow-xl"
        >
          <p className="font-display text-xl font-extrabold text-gradient">{item.place}</p>
          <p className="mt-1 text-sm text-cream/75">{item.text}</p>
        </figcaption>
      </motion.figure>
      <button onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Anterior" className={`${arrow} left-3 sm:left-8`}>
        ‹
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Siguiente" className={`${arrow} right-3 sm:right-8`}>
        ›
      </button>
    </motion.div>
  )
}

function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.46 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.36-11.37 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  )
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={profile.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={`Escríbeme por WhatsApp al ${profile.phone}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-12">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet via-pink to-[#FF8FC8] p-10 text-center sm:p-16">
          <div className="absolute -left-10 -top-10 h-48 w-48 animate-blob rounded-full bg-cream/40 blur-3xl" />
          <h2 className="relative font-display text-4xl font-extrabold text-white sm:text-6xl">
            Hagamos brillar <br />
            <span className="italic text-cream">tu marca</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-white/90">
            Escríbeme por WhatsApp y platiquemos de tu proyecto. Me encantará ser parte de él.
          </p>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 font-bold text-ink shadow-2xl transition hover:scale-105"
          >
            <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
            {profile.phone}
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-cream/50">
      <p>
        © {new Date().getFullYear()} {profile.name} {profile.lastName} · Hecho con 💜
      </p>
      <p className="mt-2 text-xs">
        Powered by{' '}
        <a
          href="https://wa.me/50375439550"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-cream/80 underline decoration-pink/60 underline-offset-4 transition hover:text-pink"
        >
          Luis Gerardo
        </a>
      </p>
    </footer>
  )
}
