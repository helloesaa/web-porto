import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import Timeline from '../components/Timeline'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { organizations, experience } from '../data/experience'
import photo from '../assets/Annisaa-pics.jpg'

const facts = [
  { label: 'Studying', value: 'Informatics Engineering, Widyatama University' },
  { label: 'Focus', value: 'Web projects, custom bots, and graphic design' },
  { label: 'Code', value: 'Front-End, React, Tailwind CSS, Node.js, TypeScript' },
  { label: 'Design', value: 'Typography, UI/UX Design, Figma' },
]

export default function About() {
  const hasBoth = organizations.length > 0 && experience.length > 0

  return (
    <PageTransition>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:grid md:min-h-svh md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:items-center md:gap-16 lg:gap-24">
        {/* Portrait card */}
        <Reveal>
          <figure className="mx-auto max-w-md md:max-w-none">
            <div className="group aspect-[4/5] overflow-hidden border border-white/10">
              <img
                src={photo}
                alt="Portrait of Annisaa"
                className="h-full w-full object-cover object-top transition-transform duration-[1500ms] ease-out md:group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-paper/70">
                Annisaa Lukluil Jannah
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-paper/40">
                Developer & Designer
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15} className="mt-12 md:mt-0">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-brand">About me</p>

          <h2 className="mb-8 font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Hello, I'm <span className="italic text-brand">Annisaa</span>
          </h2>

          <p className="mb-6 max-w-xl font-display text-2xl leading-snug text-paper/90 sm:text-[1.7rem]">
            I'm an Informatics Engineering student and a graphic designer who enjoys
            turning ideas into things people actually use.
          </p>

          <p className="mb-4 max-w-md text-[15px] leading-relaxed text-paper/60">
            My interests sit right between technology and visual arts, so my projects
            cover both worlds: clean web projects built from scratch, custom bots that
            make things easier for me and my friends, and bold posters shaped by
            typography.
          </p>
          <p className="mb-10 max-w-md text-[15px] leading-relaxed text-paper/60">
            What I love most is handling the whole process, from the logic behind a
            program to the typefaces, compositions, and storytelling around it.
          </p>

          <dl className="mb-10 grid max-w-md grid-cols-[5.5rem_1fr] gap-x-4 gap-y-4 text-sm">
            {facts.map((f) => (
              <div key={f.label} className="contents">
                <dt className="pt-0.5 text-[11px] uppercase tracking-[0.2em] text-paper/40">
                  {f.label}
                </dt>
                <dd className="text-paper/80">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-4">
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
      </section>

      {/* Organizations & experience */}
      {(organizations.length > 0 || experience.length > 0) && (
        <section className="mx-auto max-w-6xl px-6 pb-28 pt-8 md:pt-16">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand">Journey</p>
            <h2 className="mb-16 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Places I've helped <span className="italic text-brand">build.</span>
            </h2>
          </Reveal>

          <div className={cn('grid gap-16', hasBoth && 'lg:grid-cols-2 lg:gap-24')}>
            {organizations.length > 0 && (
              <Timeline title="Organizations" items={organizations} />
            )}
            {experience.length > 0 && (
              <Timeline title="Experience" items={experience} />
            )}
          </div>
        </section>
      )}
    </PageTransition>
  )
}