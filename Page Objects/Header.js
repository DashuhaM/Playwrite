import BasePage from "./BasePage";
import { expect } from '@playwright/test';

const url = "/";

export default class extends BasePage {
    constructor(page){
        super(page);
    }
get signInBtn(){
    return this.page.locator('.btn-outline-white')
}

get modalTitle(){
    return this.page.locator('.modal-title')
}

get headerLogo(){
    return this.page.locator('a.header_logo')
}

get homeBtn(){
    return this.page.locator('a.header-link')
}

get aboutBtn(){
    return this.page.locator('[appscrollto="aboutSection"]')
}

get contactBtn(){
    return this.page.locator('[appscrollto="contactsSection"]')
}
}