import { test, expect } from '@playwright/test';

test('Login existing user on Demo Webshop', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  
  await page.click('a[href="/login"]');

  await page.locator('#Email').fill('testuser256@mailinator.com');
  await page.locator('#Password').fill('Test1234!');

  await page.click('input[value="Log in"]');

  await expect(page.locator('a[href="/logout"]')).toBeVisible();
});
