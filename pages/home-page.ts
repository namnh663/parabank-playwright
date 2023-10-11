import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly adminPageLink: Locator;
    readonly customerLoginHeading: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly forgotLoginInfoLink: Locator;
    readonly registerLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminPageLink = page.locator('a', { hasText: 'Admin Page' });
        this.customerLoginHeading = page.getByRole('heading', { name: 'Customer Login' });
        this.usernameField = page.locator('input[name="username"]');
        this.passwordField = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[type="submit"]');
        this.forgotLoginInfoLink = page.locator('a', { hasText: 'Forgot login info?' });
        this.registerLink = page.locator('a', { hasText: 'Register' });
    }

    /**
     * Navigates to the Parabank website.
     */
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    /**
     * Navigates to the Admin page.
     */
    async admin() {
        await this.adminPageLink.click();
    }

    /**
     * Navigates to the Signing up page.
     */
    async register() {
        await this.registerLink.click();
    }

    /**
     * Navigates to the Customer Lookup page.
     */
    async forgotLoginInfo() {
        await this.forgotLoginInfoLink.click();
    }

    /**
     * Logs in to the ParaBank with username and password.
     * @param {string} username - The username to log in with.
     * @param {string} password - The password to log in with.
     */
    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}