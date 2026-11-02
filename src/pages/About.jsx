import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import fotoku from '../assets/Annisaa-pics.jpg' 

const skills = ['React', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Bot Development', 'Graphic Design', 'Figma']

export default function About() {
  return (
    <PageTransition>
      <section className="pt-40 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none bg-card border border-white/10 overflow-hidden">
              <img 
                src={fotoku} 
                alt="Annisaa" 
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-accent tracking-[0.3em] uppercase text-xs mb-4">About me</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">Hello, I'm Annisaa Lukluil Jannah</h2>
            <p className="text-paper/60 leading-relaxed mb-4">
              I'm an Informatics Engineering student at Widyatama University and a 
              graphic designer who enjoys turning ideas into things people actually use. 
              Because my interests sit right between technology and visual arts, my 
              projects naturally cover both worlds. You'll often find me developing 
              clean web projects from scratch, coding custom bots just to make things 
              easier for me and my friends, or diving deep into visual design and 
              typography to create bold posters and graphics.
            </p>

            <p className="text-paper/60 leading-relaxed mb-8">
              What I love most is being able to handle the whole process from start to 
              finish. I genuinely enjoy solving the logic behind a program, right before 
              switching gears to play around with typefaces, compositions, and visual 
              storytelling. Outside of coding and designing, I'm always exploring new 
              creative styles, picking up new tools, and working on fun projects with 
              the people around me.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 text-sm border border-white/10 text-paper/80 hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}