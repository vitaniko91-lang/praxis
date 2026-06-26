import { useState } from 'react'
import { MenuOverlay } from './MenuOverlay'
import { nav } from '../content/copy'

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} aria-expanded={open} aria-haspopup="dialog"
              className="font-mono text-xs tracking-[2px] text-[var(--text-muted)] hover:text-white">MENU</button>
      <MenuOverlay open={open} onClose={() => setOpen(false)} items={nav} />
    </>
  )
}
