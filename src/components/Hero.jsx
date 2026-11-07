import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowDown, User } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import photo from '../assets/another-isa.jpg'

const skills = [
  'React',
  'Tailwind CSS',
  'Python',
  'Telegram Bots',
  'Discord Bots',
  'Graphic Design',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const line = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

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
      {/* Photo: soft background on mobile, right side on desktop */}
      <div className="hero-photo-fade absolute inset-0 overflow-hidden opacity-40 md:left-auto md:right-0 md:w-[52%] md:opacity-100">
        <motion.img
          src={photo}
          alt="Portrait of Annisaa"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Static glow (touch devices) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      {/* Cursor glow (mouse only) */}
      {pos && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(167,139,250,0.14), transparent 70%)`,
          }}
        />
      )}

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-10">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Heading, revealed line by line */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span variants={line} className="block">
                Crafting bots,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span variants={line} className="block">
                websites &
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span variants={line} className="block italic text-brand">
                Digital Design.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 max-w-md leading-relaxed text-paper/60"
          >
            Hi, I'm Annisaa, an Informatics Engineering student who enjoys designing as
            much as coding. I build websites, bots, and visuals that are genuinely useful
            and easy on the eyes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/portfolio"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'rounded-none border-brand/50 bg-transparent text-brand hover:bg-brand hover:text-ink',
              )}
            >
              View my work <ArrowDown size={16} />
            </Link>
            <Link
              to="/about"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-none')}
            >
              About me <User size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scrolling skills ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="marquee-fade mt-16 overflow-hidden"
        >
          <div className="marquee flex w-max py-2">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap pr-10 text-sm text-paper/40"
              >
                {s}
                <span className="text-brand/60">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}