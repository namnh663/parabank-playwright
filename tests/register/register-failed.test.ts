import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register-page';
import { RegisterData } from '../../data/register-data';

test.beforeEach(async ({ page }) => {
  const regData = new RegisterData();
  await page.goto(regData.registerPageUrl);
});

test('should show error messages when required fields are empty', async ({ page }) => {
  const regData = new RegisterData();
  const regPage = new RegisterPage(page);
  await regPage.registerWithoutFilling();
  await expect(regPage.firstNameErrMsg).toHaveText(regData.firstNameErrMsg);
  await expect(regPage.lastNameErrMsg).toHaveText(regData.lastNameErrMsg);
  await expect(regPage.addressErrMsg).toHaveText(regData.addressErrMsg);
  await expect(regPage.cityErrMsg).toHaveText(regData.cityErrMsg);
  await expect(regPage.stateErrMsg).toHaveText(regData.stateErrMsg);
  await expect(regPage.zipCodeErrMsg).toHaveText(regData.zipCodeErrMsg);
  await expect(regPage.ssnErrMsg).toHaveText(regData.ssnErrMsg);
  await expect(regPage.usernameErrMsg).toHaveText(regData.usernameErrMsg);
  await expect(regPage.passwordErrMsg).toHaveText(regData.passwordErrMsg);
  await expect(regPage.confirmPasswordErrMsg).toHaveText(regData.confirmPasswordErrMsg);
});