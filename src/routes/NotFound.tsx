import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section aria-labelledby="nf-h1" className="px-5 md:px-20 py-20">
      <h1 id="nf-h1" className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-[-2px]">404</h1>
      <p className="mt-6 text-[var(--text-muted)]">This page does not exist. <Link to="/" className="text-[var(--accent-text)] underline">Back to index</Link>.</p>
    </section>
  )
}
