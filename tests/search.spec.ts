import { test, expect } from '@playwright/test';

/**
 * Tests that the search bar returns relevant product results.
 */
test('Search for product using keyword', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Fill in the search box with the keyword
  await page.locator('input[id="small-searchterms"]').fill('laptop');

  // Click the search button
  await page.locator('input[value="Search"]').click();

  // Expect product results to appear
  const productItems = await page.locator('.product-item').count();
  expect(productItems).toBeGreaterThan(0);

  // Optionally: check if the title contains the keyword
  const results = page.locator('.product-title a');
  await expect(results.first()).toContainText(/laptop/i);
});


/**
 * Tests that the search shows a 'no results' message when product does not exist.
 */
test('Search for non-existing product shows no results message', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('input[id="small-searchterms"]').fill('testproduct');
    await page.locator('input[value="Search"]').click();
  
    await expect(page.locator('strong.result')).toHaveText(
      'No products were found that matched your criteria.'
    );
  });