import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register-page';
import { RegisterData } from '../../data/register-data';

test.beforeEach(async ({ page }) => {
  const regData = new RegisterData();
  await page.goto(regData.registerPageUrl);
});

test('register title and description should be correct', async ({ page }) => {
  const regData = new RegisterData();
  const regPage = new RegisterPage(page);
  await expect(regPage.registerHeading).toHaveText(regData.registerHeading);
  await expect(regPage.descriptionText).toHaveText(regData.descriptionText);
});

test('should show success message when all fields are filled', async ({ page }) => {
  const regData = new RegisterData();
  const regPage = new RegisterPage(page);
  await regPage.registerWithinRandomData();
  await expect(regPage.successMsg).toHaveText(regData.successMsg);
});