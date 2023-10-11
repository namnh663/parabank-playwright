import { type Locator, type Page } from '@playwright/test';

export class AdminPage {
    readonly page: Page;
    readonly adminPageLink: Locator;
    readonly cleanSuccessMsg: Locator;
    readonly cleanButton: Locator;
    readonly initBalanceField: Locator;
    readonly submitButton: Locator;
    readonly submitSuccessMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminPageLink = page.locator('a', { hasText: 'Admin Page' });
        this.cleanSuccessMsg = page.locator('#rightPanel > p b');
        this.cleanButton = page.getByRole('button', { name: /clean/i })
        this.initBalanceField = page.locator('#initialBalance');
        this.submitButton = page.locator('input[value="Submit"]');
        this.submitSuccessMsg = page.locator('#rightPanel > p b');
    }

    /**
     * Navigates to the admin page.
     */
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/admin.htm');
    }

    /**
     * Clean the database.
     */
    async cleanDatabase() {
        await this.cleanButton.click();
    }

    /**
     * Set the balance of the account.
     * @param balance - The new balance to set.
     */
    async setBalance(balance: string) {
        await this.initBalanceField.clear();
        await this.initBalanceField.fill(balance);
        await this.submitButton.click();
    }
}