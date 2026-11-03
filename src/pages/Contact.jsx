import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { socials } from '../data/socials'

export default function Contact() {
  return (
    <PageTransition>
      <section className="pt-40 pb-24 min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="text-brand tracking-[0.3em] uppercase text-xs mb-4">Contact</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
              Let's work together
            </h2>
            <p className="text-paper/60">
              Have a project in mind? Reach out through any of these.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {socials.map((s, i) => {
              const Icon = s.icon
              const external = !s.href.startsWith('mailto:')
              return (
                <Reveal key={s.id} delay={i * 0.08}>
                  <a
                    href={s.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className="group flex items-center gap-5 bg-card border border-white/10 p-6 hover:border-brand/60 hover:-translate-y-1 transition-all"
                  >
                    <span className="w-12 h-12 shrink-0 grid place-items-center rounded-full bg-brand/10 text-brand group-hover:bg-brand group-hover:text-ink transition-colors">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-2xl">{s.label}</span>
                      <span className="block text-sm text-paper/50 break-all">{s.handle}</span>
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}