import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register-page';
import { RegisterData } from '../../data/register-data';

test.beforeEach(async ({ page }) => {
  const regData = new RegisterData();
  await page.goto(regData.registerPageUrl);
});

/**
 * The test case verifies that when all the required fields are filled
 * with valid data and the registration is successful,
 * the page displays a success message and the welcome heading contains the username.
 */
test('should show welcome message when registering successfully', async ({ page }) => {
  const regData = new RegisterData();
  const regPage = new RegisterPage(page);
  await regPage.register(
    'Nam', // firstName
    'Nguyen', // lastName
    '123 Main St', // address
    'Anytown', // city
    'CA', // state
    '12345', // zipCode
    '555-555-5555', // phoneNumber
    '123-45-6789', // ssn
    'namnh', // username
    'Password123!', // password
    'Password123!' // repassword
  );
  await expect(regPage.welcomeHeading).toHaveText('Welcome namnh');
  await expect(regPage.successMsg).toHaveText(regData.successMsg);
});