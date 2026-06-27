import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // pool: 'threads' — the default 'forks' pool intermittently times out workers in this
  // environment (jsdom env init is slow); threads is stable and faster here.
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test-setup.ts',
    passWithNoTests: true,
    pool: 'threads',
    // unit tests are src/**/*.test.* — Playwright specs (e2e/*.spec.ts) run via `npm run e2e`, not vitest
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
