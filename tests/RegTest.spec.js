import Header from "../Page Objects/Header";
import Registration from "../Page Objects/Registration";
import BasePage from "../Page Objects/BasePage";
import { test, expect } from '@playwright/test'


test.describe('Check Registration', () => {
  let header
  let registration
  
test.beforeEach(async({page}) => {
    header = new Header(page);
    registration = new Registration(page);
    await page.goto('/')
    await header.signInBtn.click()
    await page.getByText('Registration').click()
  })

test('Navigate to Registration form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Registration' }))
  .toBeVisible()
  });

test('Empty Name - shows required error', async ({page}) => {
    await registration.SignupNameField.focus();
    await registration.SignupNameField.blur();
    await expect (registration.ErrEmptyField).toContainText('Name required');
    })

test('Wrong Name - shows required error', async ({page}) => {
   await registration.SignupNameField.fill('Daria123');
   await registration.SignupNameField.blur();
   await expect (registration.ErrEmptyField).toContainText('Name is invalid');
    })

test('Too short Name - shows length error', async ({page}) => {
      await registration.SignupNameField.fill('R');
      await registration.SignupNameField.blur();
      await expect (registration.ErrEmptyField).toContainText('Name has to be from 2 to 20 characters long', 'Name is invalid');
      })

test('Empty LastName - shows required error', async ({page}) => {
    await registration.LastNameField.focus();
    await registration.LastNameField.blur();
    await expect (registration.ErrEmptyField).toContainText('Last name required');
    })

test('Wrong LastName - shows required error', async ({page}) => {
   await registration.LastNameField.fill('Vakula123');
   await registration.LastNameField.blur();
   await expect (registration.ErrEmptyField).toContainText('Last name is invalid');
    })

test('Too short LastName - shows length error', async ({page}) => {
      await registration.LastNameField.fill('T');
      await registration.LastNameField.blur();
      await expect (registration.ErrEmptyField).toContainText('Last name has to be from 2 to 20 characters long');
      })

test('Empty Emile - shows required error', async ({page}) => {
    await registration.signupEmailField.focus();
    await registration.signupEmailField.blur();
    await expect (registration.ErrEmptyField).toContainText('Email required');
    })

test('Wrong Emile - shows invalid error', async ({page}) => {
   await registration.signupEmailField.fill('email123@dfsf');
   await registration.signupEmailField.blur();
   await expect (registration.ErrEmptyField).toContainText('Email is incorrect');
    })

test('Empty Password - shows required error', async ({page}) => {
   await registration.signupPasswordField.focus();
   await registration.signupPasswordField.blur();
   await expect (registration.ErrEmptyField).toContainText('Password required');
    })

test('Wrong Password - shows invalid error', async ({page}) => {
      await registration.signupPasswordField.fill('Daria13');
      await registration.signupPasswordField.blur();
      await expect (registration.ErrEmptyField).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      })

test('Empty RepeatePassword - shows required error', async ({page}) => {
   await registration.signupRepeatPasswordField.focus();
   await registration.signupRepeatPasswordField.blur();
   await expect (registration.ErrEmptyField).toContainText('Re-enter password required');
    })

test('RepeatePassword does not match Password - shows invalid error', async ({page}) => {
      await registration.signupPasswordField.fill('Daria@13');
      await registration.signupRepeatPasswordField.fill('Daria@122');
      await registration.signupRepeatPasswordField.blur();
      await expect (registration.ErrEmptyField).toContainText('Passwords do not match');
      })     

test('User already exists', async ({page}) => {
    await registration.SignupNameField.fill('Daria');
    await registration.LastNameField.fill('Vakula');
    await registration.signupEmailField.fill('tenfdfleh961@ameady.com');
    await registration.signupPasswordField.fill('Daria@111');
    await registration.signupRepeatPasswordField.fill('Daria@111');
    await registration.RegisterBtn.click();
    await expect (registration.ErrAlert).toContainText('User already exists');

})

test('User Registration with Valid data', async ({page}) => {
    await registration.SignupNameField.fill('DariA');
    await registration.LastNameField.fill('VakulA');
    await registration.signupEmailField.fill('tdsttttfs63@ameady.com');
    await registration.signupPasswordField.fill('Daria@112');
    await registration.signupRepeatPasswordField.fill('Daria@112');
    await registration.RegisterBtn.click();
    await registration.containUrlCheck('/panel/garage');
})

});