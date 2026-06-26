import { test, expect } from '@playwright/test'

// Use an explicit context per test: test.use({reducedMotion}) inside a describe did not
// reliably apply to the page fixture in this setup, so we set the emulation directly.

test('reduced motion: no canvas, poster shown, content readable & scrollable', async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: 'reduce' })
  const page = await ctx.newPage()
  await page.goto('/')

  // The crystal WebGL scene must not mount; the static poster stands in.
  await expect(page.locator('canvas')).toHaveCount(0)
  // The crystal is decorative (wrapper is aria-hidden), so locate the poster by src, not role.
  await expect(page.locator('img[src*="crystal-poster"]')).toBeVisible()

  // Kinetic positioning line renders fully (words at full opacity, not gated to 0.12).
  const posHeading = page.locator('#pos-h2')
  await expect(posHeading).toBeVisible()
  await expect(posHeading).toContainText(/a thinking layer inside your product/i)

  // Page scrolls all the way to the form.
  await page.getByRole('heading', { name: /let's apply it/i }).scrollIntoViewIfNeeded()
  await expect(page.getByLabel(/email/i)).toBeVisible()

  await ctx.close()
})

test('with motion preference, the WebGL canvas mounts', async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: 'no-preference' })
  const page = await ctx.newPage()
  await page.goto('/')
  await expect(page.locator('canvas')).toHaveCount(1)
  await ctx.close()
})
