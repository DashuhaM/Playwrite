//Тут зазвичай у нас футер, хедер
// export default class {
//     _url; 
//     constructor(url) {
//         this._url = url;
//     }

//     navigate() {
//         cy.visit(this._url, {
//            auth:{
//         username: 'guest',
//         password: 'welcome2qauto',
//       }});
//     }
    
//     containUrlCheck(expectedUrl) {
//         cy.url().should("contain",expectedUrl);
//     }

// }
import { expect } from '@playwright/test'

export default class BasePage {
  constructor(page) {
    this.page = page
  }

  async navigate() {
    await this.page.goto('/', {
    //   httpCredentials: {
    //     username: 'guest',
    //     password: 'welcome2qauto',
    //   }
    })
  }
  async containUrlCheck(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}