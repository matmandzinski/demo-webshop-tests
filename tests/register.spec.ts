import { test } from '@playwright/test';
import { register } from '../helpers/auth';

/**
 * Test for successful user registration with a random email.
 */
test('Register new user', async ({ page }) => {
  await register(page);
});
