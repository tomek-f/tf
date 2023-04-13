import { test } from '@playwright/test';

test('Wiki test', async ({ page }) => {
  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');
  // Click text=Wikipedia The Free Encyclopedia >> span
  await page.locator('text=Wikipedia The Free Encyclopedia >> span').click();
  // Click input[name="search"]
  await page.locator('input[name="search"]').click();
  // Fill input[name="search"]
  await page.locator('input[name="search"]').fill('dupa');
  // Click button:has-text("Search")

  // const url = { url: 'https://en.wikipedia.org/wiki/Dupa#/media/File:Dupa2.JPG' };

  await Promise.all([
    page.waitForNavigation(/* url */),
    page.locator('button:has-text("Search")').click(),
  ]);
});
