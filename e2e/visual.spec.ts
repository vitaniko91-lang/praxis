import { test, expect } from '@playwright/test'

// reduced motion for deterministic snapshots (static poster, no spinning canvas)
test.use({ reducedMotion: 'reduce' })

for (const path of ['/', '/manifesto']) {
  test(`visual snapshot ${path}`, async ({ page }, testInfo) => {
    await page.goto(path)
    await page.waitForLoadState('networkidle')
    const name = `${path === '/' ? 'home' : 'manifesto'}-${testInfo.project.name}.png`
    await expect(page).toHaveScreenshot(name, { fullPage: true, maxDiffPixelRatio: 0.02 })
  })
}
