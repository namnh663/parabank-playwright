import { test, expect } from '@playwright/test';
import { AdminPage } from '../../pages/admin-page';

test.beforeEach(async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/admin.htm');
});

test('should show success message when cleaning the database successfully', async ({ page }) => {
  const adminPage = new AdminPage(page);
  await adminPage.cleanDatabase();
  await expect(adminPage.cleanSuccessMsg).toHaveText('Database Cleaned');
});

test('should show success message when setting the balance successfully', async ({ page }) => {
  const adminPage = new AdminPage(page);
  await adminPage.setBalance('1000000');
  await expect(adminPage.submitSuccessMsg).toHaveText('Settings saved successfully.');
});