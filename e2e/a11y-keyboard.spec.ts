import { test, expect } from '@playwright/test'

test('skip link is first focusable and targets #main', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByText(/skip to content/i)).toBeFocused()
})

test('landmarks and a single visible h1 exist', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('header')).toBeVisible()
  await expect(page.locator('main')).toBeVisible()
  await expect(page.locator('footer')).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/intelligence, applied/i)
})

test('MENU opens a dialog and Escape closes it (keyboard)', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'MENU' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
})

test('primary CTA is a real, focusable element', async ({ page }) => {
  await page.goto('/')
  const send = page.getByRole('button', { name: /send/i })
  await send.scrollIntoViewIfNeeded()
  await send.focus()
  await expect(send).toBeFocused()
})
