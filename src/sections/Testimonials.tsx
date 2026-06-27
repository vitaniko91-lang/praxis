import { testimonials } from '../content/copy'

export function Testimonials() {
  return (
    <section aria-labelledby="tm-h2" className="relative z-10 px-5 md:px-20 py-[120px]">
      <h2 id="tm-h2" className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-2px] mb-12">{testimonials.heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.items.map((t) => (
          <figure key={t.name} className="border border-[var(--border)] p-8 flex flex-col">
            <blockquote className="font-sans text-lg leading-relaxed">{t.quote}</blockquote>
            <figcaption className="mt-6 font-mono text-xs tracking-[1px] text-[var(--text-muted)]">
              <span className="text-[var(--text)]">{t.name}</span> — {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
