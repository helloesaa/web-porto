import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, X, ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { categories, projects } from '../data/projects'

const linkLabels = { bot: 'Open the bot', web: 'Visit the website' }

function ProjectImage({ project, className = '' }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className={`w-full object-cover ${className}`}
      />
    )
  }
  return (
    <div
      className={`w-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent flex items-center justify-center text-paper/30 text-sm ${className}`}
    >
      Project image
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const label = linkLabels[project.category]

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-4xl max-h-[90svh] overflow-y-auto bg-card border border-accent/30"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-10 h-10 grid place-items-center bg-ink/70 border border-white/10 text-paper hover:text-accent hover:border-accent transition-colors"
        >
          <X size={18} />
        </button>

        <ProjectImage project={project} className="aspect-video" />

        <div className="p-6 sm:p-8 md:p-10">
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-3">
            {categories.find((c) => c.id === project.category)?.label}
          </p>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
            {project.title}
          </h3>
          <p className="text-paper/70 leading-relaxed mb-6">{project.longDesc}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((t) => (
              <span key={t} className="text-xs text-accent border border-accent/30 px-3 py-1">
                #{t}
              </span>
            ))}
          </div>
          {project.link && label && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-ink px-8 py-4 text-sm font-medium hover:bg-paper transition-colors"
            >
              {label} <ExternalLink size={16} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}

export default function Portfolio() {
  const location = useLocation()
  const [active, setActive] = useState(location.state?.category ?? 'all')
  const [selected, setSelected] = useState(null)
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <PageTransition>
      <section className="pt-40 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-accent tracking-[0.3em] uppercase text-xs mb-4">Portfolio</p>
            <h2 className="font-display text-5xl mb-10">Selected work</h2>
          </Reveal>

          <div className="flex flex-wrap gap-x-6 sm:gap-x-8 mb-12">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative pb-4 text-sm transition-colors ${
                  active === c.id ? 'text-accent' : 'text-paper/50 hover:text-paper'
                }`}
              >
                {c.label}
                {active === c.id && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-px h-px bg-accent"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="group block w-full text-left bg-card border border-white/10 hover:border-accent/60 transition-colors cursor-pointer"
                >
                  <ProjectImage project={p} className="aspect-video" />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl">{p.title}</h3>
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-paper/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </div>
                    <p className="text-paper/60 text-sm mt-2 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs text-accent/80">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <ProjectModal key={selected.id} project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}