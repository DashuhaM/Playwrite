import BasePage from "./BasePage";

// const url = "/";

export default class extends BasePage{
    constructor(page){
        super(page);
    }
get signInField(){
    return this.page.locator('#signinEmail')
}

get signInPassword(){
    return this.page.locator('#signinPassword')
}

get loginBtn(){
    return this.page.getByRole('button', { name: 'Login' })
}

async login(email, password) {
   await this.signInField.fill(email);
   await this.signInPassword.fill(password, { sensitive: true });
   await this.loginBtn.click();
}
}