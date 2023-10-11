export class RegisterData {
    readonly registerPageUrl: string;
    readonly registerHeading: string;
    readonly descriptionText: string;
    readonly successMsg: string;
    readonly firstNameErrMsg: string;
    readonly lastNameErrMsg: string;
    readonly addressErrMsg: string;
    readonly cityErrMsg: string;
    readonly stateErrMsg: string;
    readonly zipCodeErrMsg: string;
    readonly ssnErrMsg: string;
    readonly usernameErrMsg: string;
    readonly passwordErrMsg: string;
    readonly confirmPasswordErrMsg: string;

    constructor() {
        this.registerPageUrl = 'https://parabank.parasoft.com/parabank/register.htm';
        this.registerHeading = 'Signing up is easy!';
        this.descriptionText = 'If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.';
        this.successMsg = 'Your account was created successfully. You are now logged in.';
        this.firstNameErrMsg = 'First name is required.';
        this.lastNameErrMsg = 'Last name is required.';
        this.addressErrMsg = 'Address is required.';
        this.cityErrMsg = 'City is required.';
        this.stateErrMsg = 'State is required.';
        this.zipCodeErrMsg = 'Zip Code is required.';
        this.ssnErrMsg = 'Social Security Number is required.';
        this.usernameErrMsg = 'Username is required.';
        this.passwordErrMsg = 'Password is required.';
        this.confirmPasswordErrMsg = 'Password confirmation is required.';
    }
}