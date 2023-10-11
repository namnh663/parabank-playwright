import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home-page';
import { OpenAccountPage } from '../../pages/open-account-page';

let newAccountId: string;

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.login('namnh', 'Password123!');
});

test('should show success message when opening a new saving account successfully', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.goto();
  await openAccountPage.openNewSavingAccount();
  await expect(openAccountPage.accountOpenedHeading).toHaveText('Account Opened!');
  newAccountId = await openAccountPage.newAccountIdLink.innerText();
  console.log('Your new account number: ' + newAccountId);
});

test('account type and account number should be correct', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.accountDetails(newAccountId);
  await expect(openAccountPage.accountTypeText).toHaveText('SAVINGS');
  await expect(openAccountPage.accountIdText).toHaveText(newAccountId);
});