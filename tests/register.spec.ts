import { test, expect } from '@playwright/test';

function generateRandomEmail() {
    return `user_${Date.now()}@mailinator.com`;
}

test('Register new user on Demo Webshop', async ({ page }) => {
    const email = generateRandomEmail();
  
    await page.goto('https://demowebshop.tricentis.com/');
    await page.click('a[href="/register"]');
  
    await page.locator('#gender-male').check();
    await page.locator('#FirstName').fill('Jan');
    await page.locator('#LastName').fill('Kowalski');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill('Test1234!');
    await page.locator('#ConfirmPassword').fill('Test1234!');
    await page.click('#register-button');
  
    await expect(page.locator('.result')).toHaveText('Your registration completed');
  });