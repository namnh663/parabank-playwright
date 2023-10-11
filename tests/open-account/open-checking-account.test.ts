import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { OpenAccountPage } from '../../pages/open-account-page';

let newAccountId: string;

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.login('namnh', 'Password123!');
});

test('open new account heading should be visible', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.goto();
  await expect(openAccountPage.openNewAccountHeading).toBeVisible();
});

test('should show success message when opening a new checking account successfully', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.goto();
  await openAccountPage.openNewCheckingAccount();
  await expect(openAccountPage.accountOpenedHeading).toHaveText('Account Opened!');
  newAccountId = await openAccountPage.newAccountIdLink.innerText();
  console.log('Your new account number: ' + newAccountId);
});

test('account number should be correct', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.accountDetails(newAccountId);
  await expect(openAccountPage.accountIdText).toHaveText(newAccountId);
});