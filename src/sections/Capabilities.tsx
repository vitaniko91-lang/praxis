import { capabilities } from '../content/copy'
import { Carousel } from '../components/Carousel'

export function Capabilities() {
  return (
    <section aria-labelledby="cap-h2" className="relative z-10 px-5 md:px-20 py-[120px]">
      <h2 id="cap-h2" className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-2px] mb-12">
        {capabilities.heading}
      </h2>
      <Carousel label="Capabilities">
        {capabilities.items.map((c) => (
          <article key={c.title} className="border border-[var(--border)] p-8 mx-1">
            <h3 className="font-display text-2xl">{c.title}</h3>
            <p className="font-sans text-[var(--text-muted)] mt-3">{c.body}</p>
          </article>
        ))}
      </Carousel>
    </section>
  )
}
