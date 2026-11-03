import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
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
      className={`w-full bg-gradient-to-br from-brand/20 via-brand/5 to-transparent flex items-center justify-center text-paper/30 text-sm ${className}`}
    >
      Project image
    </div>
  )
}

export default function Portfolio() {
  const location = useLocation()
  const [active, setActive] = useState(location.state?.category ?? 'all')
  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)
  const label = selected ? linkLabels[selected.category] : null

  const openProject = (project) => {
    setSelected(project)
    setOpen(true)
  }

  return (
    <PageTransition>
      <section className="pt-40 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-brand tracking-[0.3em] uppercase text-xs mb-4">Portfolio</p>
            <h2 className="font-display text-5xl mb-10">Selected work</h2>
          </Reveal>

          <div className="flex flex-wrap gap-x-6 sm:gap-x-8 mb-12">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative pb-4 text-sm transition-colors ${
                  active === c.id ? 'text-brand' : 'text-paper/50 hover:text-paper'
                }`}
              >
                {c.label}
                {active === c.id && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-px h-px bg-brand"
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
                  onClick={() => openProject(p)}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="group block w-full text-left bg-card border border-white/10 hover:border-brand/60 transition-colors cursor-pointer"
                >
                  <ProjectImage project={p} className="aspect-video" />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl">{p.title}</h3>
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-paper/40 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </div>
                    <p className="text-paper/60 text-sm mt-2 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs text-brand/80">
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90svh] gap-0 overflow-y-auto border-brand/30 bg-card p-0 [&>button]:bg-ink/70 [&>button]:p-2 [&>button]:text-paper">
          {selected && (
            <>
              <ProjectImage project={selected} className="aspect-video" />
              <div className="p-6 sm:p-8 md:p-10">
                <p className="text-brand tracking-[0.3em] uppercase text-xs mb-3">
                  {categories.find((c) => c.id === selected.category)?.label}
                </p>
                <DialogHeader className="text-left">
                  <DialogTitle className="font-display text-3xl sm:text-4xl md:text-5xl font-normal">
                    {selected.title}
                  </DialogTitle>
                  <DialogDescription className="text-paper/70 text-base leading-relaxed">
                    {selected.longDesc}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-3 my-8">
                  {selected.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="rounded-none border-brand/30 px-3 py-1 text-brand"
                    >
                      #{t}
                    </Badge>
                  ))}
                </div>

                {selected.link && label && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ size: 'lg' }), 'rounded-none')}
                  >
                    {label} <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  )
}