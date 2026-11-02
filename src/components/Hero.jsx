import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowDown, User } from 'lucide-react'

export default function Hero() {
  const [pos, setPos] = useState(null)

  const handleMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <section
      id="home"
      onPointerMove={handleMove}
      onPointerLeave={() => setPos(null)}
      className="relative min-h-svh flex items-center overflow-hidden"
    >
      {/* static glow (works on touch devices too) */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />

      {/* cursor glow (mouse only) */}
      {pos && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(167,139,250,0.14), transparent 70%)`,
          }}
        />
      )}

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent tracking-[0.3em] uppercase text-xs mb-6"
        >
          Informatics engineering student & graphic designer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.05]"
        >
          Crafting bots, <br />
          websites & <span className="italic text-accent"><br />Digital Design.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-xl text-paper/60 leading-relaxed"
        >
          Hi, I'm Annisaa Lukluil Jannah. I'm an Informatics Engineering student who 
          enjoys designing as much as coding. Usually, you'll find me putting together 
          websites, building bots to automate boring tasks, or working on visual
          design projects. Whether I'm writing lines of code or playing with layouts 
          and colors, my goal is simply to create things that are genuinely useful and 
          easy on the eyes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 border border-accent/50 text-accent px-6 py-3 text-sm hover:bg-accent hover:text-ink transition-colors"
          >
            VIEW MY WORK <ArrowDown size={16} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-accent text-ink px-6 py-3 text-sm font-medium hover:bg-paper transition-colors"
          >
            ABOUT ME <User size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}