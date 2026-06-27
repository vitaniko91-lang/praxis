// Render the reduced-motion crystal poster from the live (motion-on) canvas.
// Usage: build + preview the app on :4173, then `npm run poster`.
import { chromium } from '@playwright/test'
import sharp from 'sharp'

const URL = process.env.POSTER_URL ?? 'http://localhost:4173/'

const run = async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })
  await page.goto(URL)
  await page.waitForTimeout(2500) // let the crystal settle
  // The poster is the DECORATIVE crystal only — hide the foreground text so it isn't baked in
  // (under reduced-motion the poster sits behind the real section text).
  await page.evaluate(() => {
    document.querySelectorAll('section, header, footer').forEach((el) => {
      ;(el as HTMLElement).style.visibility = 'hidden'
    })
  })
  await page.waitForTimeout(200)
  const canvas = page.locator('canvas').first()
  const png = await canvas.screenshot()
  await sharp(png).webp({ quality: 80 }).toFile('public/crystal-poster.webp')
  await browser.close()
  console.log('poster written → public/crystal-poster.webp')
}

run()
