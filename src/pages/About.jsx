import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Mail } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import photo from '../assets/Annisaa-pics.png'

const skills = ['Front-End', 'React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Bot Development', 'Graphic Design', 'Figma', 'Typography', 'Web Development', 'UI/UX Design']

export default function About() {
  return (
    <PageTransition>
      <section className="relative min-h-svh overflow-hidden md:flex md:items-center">
        {/* Photo: sticks to the screen edges, fades only toward the text */}
        <div className="photo-fade relative h-[65svh] overflow-hidden md:absolute md:inset-y-0 md:left-0 md:h-auto md:w-[52%]">
          <motion.img
            src={photo}
            alt="Portrait of Annisaa"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Text */}
        <div className="relative mx-auto w-full max-w-6xl px-6 py-12 md:grid md:grid-cols-2 md:py-32">
          <Reveal delay={0.15} className="md:col-start-2">
            <p className="text-brand tracking-[0.3em] uppercase text-xs mb-4">About me</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">
              Hello, I'm <span className="italic text-brand">Annisaa</span>
            </h2>
            <p className="text-paper/60 leading-relaxed mb-4">
              I'm an Informatics Engineering student at Widyatama University and a graphic designer who enjoys 
              turning ideas into things people actually use. Because my interests sit right between technology 
              and visual arts, my projects naturally cover both worlds. You'll often find me developing clean 
              web projects from scratch, coding custom bots just to make things easier for me and my friends, or 
              diving deep into visual design and typography to create bold posters and graphics.
            </p>
            <p className="text-paper/60 leading-relaxed mb-8">
              What I love most is being able to handle the whole process from start to finish. I genuinely enjoy 
              solving the logic behind a program, right before switching gears to play around with typefaces, 
              compositions, and visual storytelling. Outside of coding and designing, I'm always exploring new 
              creative styles, picking up new tools, and working on fun projects with the people around me.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="rounded-none border-white/10 px-4 py-2 text-sm text-paper/80 transition-colors hover:border-brand hover:text-brand"
                >
                  {s}
                </Badge>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className={cn(buttonVariants({ size: 'lg' }), 'rounded-none')}
              >
                Get in touch <Mail size={16} />
              </Link>
              <Link
                to="/portfolio"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'rounded-none border-brand/50 bg-transparent text-brand hover:bg-brand hover:text-ink',
                )}
              >
                See my work <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}