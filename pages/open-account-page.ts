import { type Locator, type Page } from '@playwright/test';

export class OpenAccountPage {
    readonly page: Page;
    readonly accountServiceHeading: Locator;
    readonly openNewAccountButton: Locator;
    readonly openNewAccountHeading: Locator;
    readonly accountTypeSelect: Locator;
    readonly accountIdSelect: Locator;
    readonly accountOpenedHeading: Locator;
    readonly newAccountIdLink: Locator;
    readonly accountTypeText: Locator;
    readonly accountIdText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountServiceHeading = page.getByRole('heading', { name: 'Account Services' });
        this.openNewAccountButton = page.locator('input[value="Open New Account"]');
        this.openNewAccountHeading = page.getByRole('heading', { name: 'Open New Account' });
        this.accountTypeSelect = page.locator('select[ng-model="types.selectedOption"]');
        this.accountIdSelect = page.locator('#fromAccountId');
        this.accountOpenedHeading = page.getByRole('heading', { name: 'Account Opened!' });
        this.newAccountIdLink = page.locator('#newAccountId');
        this.accountTypeText = page.locator('#accountType');
        this.accountIdText = page.locator('#accountId');
    }

    /**
     * Navigates to the admin page.
     */
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/openaccount.htm');
    }

    /**
     * Navigates to the account details page.
     * @param {string} accountId - The ID of the account.
     */
    async accountDetails(accountId: string) {
        await this.page.goto(`https://parabank.parasoft.com/parabank/activity.htm?id=${accountId}`);
    }

    /**
     * Opens a new checking account.
     */
    async openNewCheckingAccount() {
        await this.page.waitForTimeout(1000);
        await this.openNewAccountButton.click();
    }

    /**
     * Opens a new saving account.
     */
    async openNewSavingAccount() {
        await this.accountTypeSelect.selectOption({ label: 'SAVINGS' });
        await this.page.waitForTimeout(1000);
        await this.openNewAccountButton.click();
    }

    /**
     * Navigates to the account details page.
     */
    async openAccountDetails() {
        await this.newAccountIdLink.click();
    }
}