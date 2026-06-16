import { test, expect } from '@playwright/test';
import Header from '../Page Objects/Header';
import LoginPage from '../Page Objects/LoginPage';

test('authenticate', async ({ page }) => {
    const header = new Header(page);
    const loginPage = new LoginPage(page);

    await page.goto('/');

    await header.signInBtn.click();

    await loginPage.login(
        'tdsttttfs63@ameady.com',
        'Daria@112'
    );

    await expect(page).toHaveURL(/garage/);

    await page.context().storageState({
        path: 'storage/user.json',
    });
});