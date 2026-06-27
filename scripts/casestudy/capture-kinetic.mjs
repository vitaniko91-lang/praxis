import { chromium } from '@playwright/test'
import { execSync } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const ABS = '/Users/vitalinanikulina/Documents/Work/Vitalina/docs/portfolio/praxis-casestudy/assets/motion'
const vdir = mkdtempSync(join(tmpdir(), 'cs-kin-'))
const b = await chromium.launch()
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, recordVideo: { dir: vdir, size: { width: 1440, height: 900 } } })
const p = await ctx.newPage()
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await p.waitForTimeout(2000)
for (let i = 0; i <= 20; i++) { await p.mouse.wheel(0, 130); await p.waitForTimeout(120) }
await p.waitForTimeout(600)
await ctx.close(); await b.close()
const webm = execSync(`ls -t ${vdir}/*.webm | head -1`).toString().trim()
execSync(`ffmpeg -y -i "${webm}" -vf "fps=20,scale=1200:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 "${ABS}/kinetic-positioning.gif"`, { stdio: 'inherit' })
console.log('done')
