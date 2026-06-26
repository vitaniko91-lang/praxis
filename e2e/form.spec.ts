import { test, expect, type Page } from '@playwright/test'

async function fill(page: Page) {
  await page.getByLabel(/name/i).fill('Ada Lovelace')
  await page.getByLabel(/email/i).fill('ada@analytical.io')
  await page.getByLabel(/message/i).fill('We want the thinking layer in our product.')
}

test('shows success ONLY after a 200 (no optimistic success)', async ({ page }) => {
  await page.route('**/api/submit', (r) => r.fulfill({ status: 200, body: JSON.stringify({ ok: true }) }))
  await page.goto('/')
  await page.getByRole('heading', { name: /let's apply it/i }).scrollIntoViewIfNeeded()
  await fill(page)
  await page.getByRole('button', { name: /send/i }).click()
  await expect(page.getByText(/thank you/i)).toBeVisible()
})

test('shows an error when the backend fails (no fake success)', async ({ page }) => {
  await page.route('**/api/submit', (r) => r.fulfill({ status: 502, body: JSON.stringify({ ok: false }) }))
  await page.goto('/')
  await page.getByRole('heading', { name: /let's apply it/i }).scrollIntoViewIfNeeded()
  await fill(page)
  await page.getByRole('button', { name: /send/i }).click()
  await expect(page.getByText(/something went wrong/i)).toBeVisible()
  await expect(page.getByText(/thank you/i)).toHaveCount(0)
})

test('blocks submit and shows errors on invalid input', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('heading', { name: /let's apply it/i }).scrollIntoViewIfNeeded()
  await page.getByRole('button', { name: /send/i }).click()
  await expect(page.getByRole('alert').first()).toBeVisible()
})
