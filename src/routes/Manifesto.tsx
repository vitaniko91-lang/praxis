import { manifesto } from '../content/copy'
export default function Manifesto() {
  return (
    <section aria-labelledby="man-h1" className="px-5 md:px-20 py-[120px] max-w-[820px]">
      <h1 id="man-h1" className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-2px] leading-[.9]">{manifesto.h1}</h1>
      {manifesto.paras.map((p, i) => (<p key={i} className="font-sans text-lg text-[var(--text-muted)] mt-8 leading-relaxed">{p}</p>))}
    </section>
  )
}
