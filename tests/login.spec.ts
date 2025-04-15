import { test } from '@playwright/test';
import { login } from '../helpers/auth';
import { testUser } from '../helpers/testUser';

/**
 * Test for logging in with a predefined test user.
 */
test('Login existing test user', async ({ page }) => {
  await login(page, testUser.email, testUser.password);
});
