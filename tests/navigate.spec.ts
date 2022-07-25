import { expect, test } from '@playwright/test';

const baseUrl = 'http://localhost:3000/';

test.only('navigation test', async ({ page }) => {
  await page.goto(baseUrl);
  // page.locator finds elements on the page at any moment
  const titleLocator = page.locator('h5');
  await expect(titleLocator).toHaveText('Book your flights');
});
