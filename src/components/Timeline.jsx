import Reveal from './Reveal'

export default function Timeline({ title, items }) {
  return (
    <div>
      <Reveal>
        <h3 className="mb-8 text-xs uppercase tracking-[0.3em] text-brand">{title}</h3>
      </Reveal>

      <ol>
        {items.map((item, i) => (
          <li key={`${item.role}-${item.period}`} className="group py-5 first:pt-0">
            <Reveal delay={i * 0.08}>
              <div className="grid gap-1 transition-transform duration-300 group-hover:translate-x-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                <p className="pt-1 text-[11px] uppercase tracking-[0.2em] text-paper/40">
                  {item.period}
                </p>
                <div>
                  <h4 className="font-display text-2xl leading-tight transition-colors group-hover:text-brand">
                    {item.role}
                  </h4>
                  <p className="mt-1 text-sm text-paper/70">{item.org}</p>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-paper/55">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}