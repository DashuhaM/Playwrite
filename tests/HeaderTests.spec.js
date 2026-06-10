import Header from "../Page Objects/Header";
import BasePage from "../Page Objects/BasePage";
import { test, expect } from '@playwright/test'

test.describe('HeaderTesting', () => {
  
    let header

  test.beforeEach(async ({page}) => {
    header = new Header(page);
    await header.navigate();
  });



  test('Check redirection to Login Page', async ({page}) => {
      await header.signInBtn.click();
      await expect(header.modalTitle).toBeVisible();
      })

  test('Check redirection to Logo', async ({page}) => {
      await header.headerLogo.click();
      await header.containUrlCheck("https://qauto.forstudy.space/");
      })

  test('Check redirection to Home Page', async ({page}) => {
      await header.homeBtn.click();
      await header.containUrlCheck("https://qauto.forstudy.space/");
      })

  test('Check redirection to About Secton', async ({page}) => {
      await header.aboutBtn.click();
      await expect(page.locator('#aboutSection')).toBeVisible();
      })

//   test('Check redirection to Contact Sction', async ({page}) => {
//       await header.contactBtn.click();
//       await cy.get ('#contactsSection').should('be.visible');
//       })

});