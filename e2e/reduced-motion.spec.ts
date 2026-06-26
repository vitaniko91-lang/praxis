import { test, expect } from '@playwright/test'

test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce' })

  test('no <canvas>, poster shown, content readable & scrollable', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('canvas')).toHaveCount(0)
    await expect(page.getByRole('img', { name: /praxis crystal/i })).toBeVisible()
    // kinetic positioning line is fully present (not gated)
    await expect(page.getByRole('heading', { name: /a thinking layer inside your product/i })).toBeVisible()
    // page scrolls all the way to the form
    await page.getByRole('heading', { name: /let's apply it/i }).scrollIntoViewIfNeeded()
    await expect(page.getByLabel(/email/i)).toBeVisible()
  })
})

test('with motion preference, a <canvas> is present', async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: 'no-preference' })
  const page = await ctx.newPage()
  await page.goto('/')
  await expect(page.locator('canvas')).toHaveCount(1)
  await ctx.close()
})
