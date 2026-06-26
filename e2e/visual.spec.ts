import { test, expect } from '@playwright/test'

// reduced motion for deterministic snapshots (static poster, no spinning canvas).
// NOTE: only the manifesto page is snapshotted — full-page regression of the immersive
// home is flaky (font-swap timing + the tall sticky/-mt overlap) and is deferred to Plan 3,
// once the real crystal poster is rendered and the visual design is locked. The home's
// correctness is covered by the functional e2e (a11y / reduced-motion / form).
test.use({ reducedMotion: 'reduce' })

for (const path of ['/manifesto']) {
  test(`visual snapshot ${path}`, async ({ page }, testInfo) => {
    await page.goto(path)
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot(`manifesto-${testInfo.project.name}.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
    })
  })
}
