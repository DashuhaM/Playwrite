import BasePage from "./BasePage";
import { expect } from '@playwright/test';

const url = "/";

export default class extends BasePage {
    constructor(page){
        super(page);
    }

get RegistrationBtn(){
    return this.page.locator('button', 'Registration')
}


get RegModalTitle(){
    return this.page.locator('Registration')
}

get SignupNameField(){
    return this.page.locator('#signupName')
}

get LastNameField(){
    return this.page.locator('#signupLastName')
}

get signupEmailField(){
    return this.page.locator('#signupEmail')
}

get signupPasswordField(){
    return this.page.locator('#signupPassword')
}

get signupRepeatPasswordField(){
    return this.page.locator('#signupRepeatPassword')
}

get RegisterBtn(){
    return this.page.getByRole('button', { name: /^Register$/ })
}


get ErrEmptyField(){
    return this.page.locator('.invalid-feedback')
}


get ErrAlert(){
    return this.page.locator('.alert-danger')
}

}




