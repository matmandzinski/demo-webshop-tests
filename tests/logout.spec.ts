import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';
import { testUser } from '../helpers/testUser';

test('User can log out successfully', async ({ page }) => {

  await login(page, testUser.email, testUser.password);

  await page.click('a[href="/logout"]');

  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
});