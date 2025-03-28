import { test, expect } from '@playwright/test';

test('can eat cookies and refill', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('button:nth-child(3)').first().click();
  await page.locator('button:nth-child(3)').first().click();
  await page.getByRole('button', { name: 'Refill cookie jar' }).first().click();
});