import { test, expect } from '@playwright/test';


test('Add product to cart and verify in shopping cart', async ({ page }) => {
  
  await page.goto('https://demowebshop.tricentis.com/');

  await page.getByRole('link', { name: '14.1-inch Laptop', exact: true }).click();

  await page.locator('#add-to-cart-button-31').click();

  await expect(page.getByText('The product has been added to')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Shopping cart (1)' })).toBeVisible();

  await page.hover('.cart-label');
  await page.waitForSelector('.mini-shopping-cart');
  await expect(page.locator('.mini-shopping-cart')).toContainText('There are 1 item(s) in your');

  await page.locator('#topcartlink a[href="/cart"]').click(); 

  await expect(page.getByRole('heading', { name: 'Shopping cart' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '14.1-inch Laptop', exact: true })).toBeVisible();
});


test('Add two products to cart and verify in cart summary', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  await page.locator('ul.top-menu').locator('a[href="/books"]').click();

  await page.getByRole('button', { name: 'Add to cart' }).nth(0).click();
  await expect(page.getByText('The product has been added to')).toBeVisible();

  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
  await expect(page.getByText('The product has been added to')).toBeVisible();

  await page.hover('.cart-label');
  await page.waitForSelector('.mini-shopping-cart');
  await expect(page.locator('.mini-shopping-cart')).toContainText('There are 2 item(s) in your');
  
  await page.locator('#topcartlink a[href="/cart"]').click(); 

  await expect(page.getByRole('heading', { name: 'Shopping cart' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Computing and Internet', exact: true })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Fiction', exact: true })).toBeVisible();
});