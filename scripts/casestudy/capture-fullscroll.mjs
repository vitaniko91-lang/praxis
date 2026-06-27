import { chromium } from '@playwright/test'
import { execSync } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
const ABS = '/Users/vitalinanikulina/Documents/Work/Vitalina/docs/portfolio/praxis-casestudy/assets/motion'
const vdir = mkdtempSync(join(tmpdir(), 'cs-full-'))
const b = await chromium.launch()
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, recordVideo: { dir: vdir, size: { width: 1440, height: 900 } } })
const p = await ctx.newPage()
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await p.waitForTimeout(3000)
const total = await p.evaluate(() => document.body.scrollHeight)
for (let y = 0; y < total; y += 90) { await p.mouse.wheel(0, 90); await p.waitForTimeout(90) }
await p.waitForTimeout(800)
await ctx.close(); await b.close()
const webm = execSync(`ls -t ${vdir}/*.webm | head -1`).toString().trim()
execSync(`ffmpeg -y -i "${webm}" -c:v libx264 -pix_fmt yuv420p -movflags +faststart "${ABS}/full-scroll.mp4"`, { stdio: 'inherit' })
console.log('done')
