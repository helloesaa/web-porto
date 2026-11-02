import { Link } from 'react-router-dom'
import { Bot, Globe, Palette, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'

const items = [
  { id: 'bot', icon: Bot, title: 'Bots', text: 'Handy custom bots I made just to make daily life easier and more fun for me and my friends.' },
  { id: 'web', icon: Globe, title: 'Website', text: 'Various websites and personal web projects where I turn ideas into interactive, functional, and easy-to-use pages.' },
  { id: 'design', icon: Palette, title: 'Graphic Design', text: 'Mostly posters and creative visuals where I play around with typography, colors, and layouts to make things stand out.' },
]

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.id} delay={i * 0.1}>
                <Link
                  to="/portfolio"
                  state={{ category: item.id }}
                  className="group block h-full bg-card border border-white/10 p-8 hover:border-accent/60 transition-colors"
                >
                  <Icon className="text-accent mb-6" size={28} />
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-3xl">{item.title}</h3>
                    <ArrowUpRight
                      size={20}
                      className="text-paper/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-paper/60 text-sm mt-3 leading-relaxed">{item.text}</p>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>
    </PageTransition>
  )
}