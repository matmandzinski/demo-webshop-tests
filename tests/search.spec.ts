import { test, expect } from '@playwright/test';


test('Search for existing product using keyword', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  await page.locator('input[id="small-searchterms"]').fill('laptop');

  await page.locator('input[value="Search"]').click();

  const productItems = await page.locator('.product-item').count();
  expect(productItems).toBeGreaterThan(0);

  const results = page.locator('.product-title a');
  await expect(results.first()).toContainText(/laptop/i);
});

test('Search for non-existing product shows no results message', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('input[id="small-searchterms"]').fill('testproduct');
    await page.locator('input[value="Search"]').click();
  
    await expect(page.locator('strong.result')).toHaveText(
      'No products were found that matched your criteria.'
    );
  });