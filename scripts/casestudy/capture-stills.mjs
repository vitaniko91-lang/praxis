import { chromium } from '@playwright/test'

const ABS = '/Users/vitalinanikulina/Documents/Work/Vitalina/docs/portfolio/praxis-casestudy/assets/stills'
const sections = [
  { id: 'code', sel: '#code-h2' },
  { id: 'built-for', sel: '#built-h2' },
  { id: 'testimonials', sel: '#tm-h2' },
  { id: 'faq', sel: '#faq-h2' },
]
const b = await chromium.launch()

// hero still: motion-ON (live crystal), frozen
const cm = await b.newContext({ reducedMotion: 'no-preference', viewport: { width: 1440, height: 900 } })
const pm = await cm.newPage()
await pm.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await pm.waitForTimeout(3000)
await pm.screenshot({ path: `${ABS}/hero.png` })
await cm.close()

// section stills: reduced-motion (clean, deterministic; these sections have no crystal)
const c = await b.newContext({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } })
const p = await c.newPage()
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
for (const s of sections) {
  await p.locator(s.sel).scrollIntoViewIfNeeded()
  await p.waitForTimeout(400)
  await p.screenshot({ path: `${ABS}/${s.id}.png` })
}
await p.goto('http://localhost:4173/manifesto', { waitUntil: 'networkidle' })
await p.waitForTimeout(800)
await p.screenshot({ path: `${ABS}/manifesto.png`, fullPage: true })
await c.close()
await b.close()
console.log('stills done')
