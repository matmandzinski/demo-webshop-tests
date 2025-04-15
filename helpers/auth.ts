import { Page, expect } from '@playwright/test';
import { generateRandomEmail } from './utils';

/**
 * Registers a new user with a random email address.
 * Returns the generated email for further usage.
 */
export async function register(page: Page) {
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

  return email; 
}

/**
 * Logs in an existing user with provided email and password.
 */
export async function login(page: Page, email: string, password: string) {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.click('a[href="/login"]');

  await page.locator('#Email').fill(email);
  await page.locator('#Password').fill(password);
  await page.click('input[value="Log in"]');

  await expect(page.locator('a[href="/logout"]')).toBeVisible();
}