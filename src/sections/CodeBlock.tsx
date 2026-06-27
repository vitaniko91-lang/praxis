import { useState } from 'react'
import { codeBlock } from '../content/copy'

export function CodeBlock() {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(codeBlock.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable (e.g. insecure context) — no-op */
    }
  }
  return (
    <section aria-labelledby="code-h2" className="relative z-10 px-5 md:px-20 py-[120px]">
      <h2 id="code-h2" className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-2px]">{codeBlock.heading}</h2>
      <p className="font-sans text-[var(--text-muted)] mt-4 mb-10 max-w-[52ch]">{codeBlock.sub}</p>
      <div className="border border-[var(--border)] bg-[var(--bg-2)] max-w-[680px]">
        <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)]">
          <span className="font-mono text-xs tracking-[1px] text-[var(--text-muted)]">{codeBlock.filename}</span>
          <button
            type="button"
            onClick={copy}
            className="font-mono text-xs tracking-[1px] uppercase text-[var(--accent-text)] hover:text-white"
            aria-live="polite"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="font-mono text-[var(--text)]">{codeBlock.code}</code>
        </pre>
      </div>
    </section>
  )
}
