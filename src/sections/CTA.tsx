import { cta } from '../content/copy'
import { ContactForm } from '../components/ContactForm'

export function CTA() {
  return (
    <section id="contact" aria-labelledby="cta-h2" className="relative z-10 bg-[var(--bg-invert)] text-[var(--text-on-light)] px-5 md:px-20 py-[120px]">
      <h2 id="cta-h2" className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] tracking-[-2px]">
        {cta.heading}
      </h2>
      <p className="font-sans text-neutral-600 mt-4 mb-10">{cta.sub}</p>
      <ContactForm />
    </section>
  )
}
