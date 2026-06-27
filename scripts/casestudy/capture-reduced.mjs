import { chromium } from '@playwright/test'
import { execSync } from 'node:child_process'
const ABS = '/Users/vitalinanikulina/Documents/Work/Vitalina/docs/portfolio/praxis-casestudy/assets/motion'
const TMP = '/tmp'
const b = await chromium.launch()
const c1 = await b.newContext({ reducedMotion: 'no-preference', viewport: { width: 1440, height: 900 } })
const p1 = await c1.newPage(); await p1.goto('http://localhost:4173/', { waitUntil: 'networkidle' }); await p1.waitForTimeout(3000)
await p1.screenshot({ path: `${TMP}/rm-motion.png` }); await c1.close()
const c2 = await b.newContext({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } })
const p2 = await c2.newPage(); await p2.goto('http://localhost:4173/', { waitUntil: 'networkidle' }); await p2.waitForTimeout(1500)
await p2.screenshot({ path: `${TMP}/rm-reduced.png` }); await c2.close()
await b.close()
execSync(`ffmpeg -y -i ${TMP}/rm-motion.png -i ${TMP}/rm-reduced.png -filter_complex "[0]pad=iw+24:ih:0:0:black[a];[a][1]hstack" "${ABS}/reduced-motion-swap.png"`, { stdio: 'inherit' })
console.log('done')
