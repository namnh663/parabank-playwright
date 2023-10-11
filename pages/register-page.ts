import { type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class RegisterPage {
    readonly page: Page;
    readonly registerHeading: Locator;
    readonly descriptionText: Locator;
    readonly welcomeHeading: Locator;
    readonly successMsg: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly addressField: Locator;
    readonly cityField: Locator;
    readonly stateField: Locator;
    readonly zipCodeField: Locator;
    readonly phoneNumberField: Locator;
    readonly ssnField: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly confirmField: Locator;
    readonly registerButton: Locator;
    readonly firstNameErrMsg: Locator;
    readonly lastNameErrMsg: Locator;
    readonly addressErrMsg: Locator;
    readonly cityErrMsg: Locator;
    readonly stateErrMsg: Locator;
    readonly zipCodeErrMsg: Locator;
    readonly ssnErrMsg: Locator;
    readonly usernameErrMsg: Locator;
    readonly passwordErrMsg: Locator;
    readonly confirmPasswordErrMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerHeading = page.getByRole('heading', { name: 'Signing up is easy!' });
        this.descriptionText = page.locator('#rightPanel > p');
        this.welcomeHeading = page.locator('h1.title');
        this.successMsg = page.locator('#rightPanel > p');
        this.firstNameField = page.locator('input[name="customer.firstName"]');
        this.lastNameField = page.locator('input[name="customer.lastName"]');
        this.addressField = page.locator('input[name="customer.address.street"]');
        this.cityField = page.locator('input[name="customer.address.city"]');
        this.stateField = page.locator('input[name="customer.address.state"]');
        this.zipCodeField = page.locator('input[name="customer.address.zipCode"]');
        this.phoneNumberField = page.locator('input[name="customer.phoneNumber"]');
        this.ssnField = page.locator('input[name="customer.ssn"]');
        this.usernameField = page.locator('input[name="customer.username"]');
        this.passwordField = page.locator('input[name="customer.password"]');
        this.confirmField = page.locator('#repeatedPassword');
        this.registerButton = page.locator('input[value="Register"]');
        this.firstNameErrMsg = page.locator('span[id="customer.firstName.errors"]');
        this.lastNameErrMsg = page.locator('span[id="customer.lastName.errors"]');
        this.addressErrMsg = page.locator('span[id="customer.address.street.errors"]');
        this.cityErrMsg = page.locator('span[id="customer.address.city.errors"]');
        this.stateErrMsg = page.locator('span[id="customer.address.state.errors"]');
        this.zipCodeErrMsg = page.locator('span[id="customer.address.zipCode.errors"]');
        this.ssnErrMsg = page.locator('span[id="customer.ssn.errors"]');
        this.usernameErrMsg = page.locator('span[id="customer.username.errors"]');
        this.passwordErrMsg = page.locator('span[id="customer.password.errors"]');
        this.confirmPasswordErrMsg = page.locator('span[id="repeatedPassword.errors"]');
    }

    /**
     * Navigates to the Register page.
     */
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
    }

    /**
     * Registers without filling any information.
     */
    async registerWithoutFilling() {
        await this.registerButton.click();
    }

    /**
     * Registers a user with the given information.
     * @param firstName - The user's first name.
     * @param lastName - The user's last name.
     * @param address - The user's address.
     * @param city - The user's city.
     * @param state - The user's state.
     * @param zipCode - The user's zip code.
     * @param phoneNumber - The user's phone number.
     * @param ssn - The user's Social Security Number.
     * @param username - The user's username.
     * @param password - The user's password.
     * @param repassword - The user's password confirmation.
     */
    async register(
        firstName: string,
        lastName: string,
        address: string,
        city: string,
        state: string,
        zipCode: string,
        phoneNumber: string,
        ssn: string,
        username: string,
        password: string,
        repassword: string
    ) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.addressField.fill(address);
        await this.cityField.fill(city);
        await this.stateField.fill(state);
        await this.zipCodeField.fill(zipCode);
        await this.phoneNumberField.fill(phoneNumber);
        await this.ssnField.fill(ssn);
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.confirmField.fill(repassword);
        await this.registerButton.click();
    }

    async registerWithinRandomData() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const address = faker.location.street();
        const city = faker.location.city();
        const state = faker.location.state();
        const zipCode = faker.location.zipCode();
        const phoneNumber = faker.phone.number();
        const ssn = faker.finance.routingNumber();
        const username = faker.internet.userName();
        const password = faker.internet.password();
        const repassword = password;
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.addressField.fill(address);
        await this.cityField.fill(city);
        await this.stateField.fill(state);
        await this.zipCodeField.fill(zipCode);
        await this.phoneNumberField.fill(phoneNumber);
        await this.ssnField.fill(ssn);
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.confirmField.fill(repassword);
        await this.registerButton.click();
    }
}