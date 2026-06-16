import { test as base, expect } from '@playwright/test';
import GaragePage from '../Page Objects/GaragePage.js';



// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend({
  userGaragePage: async ({ page }, use) => {
    // Set up the fixture.
    const garagePage = new GaragePage(page);
  
    await page.goto('/panel/garage')

    // Use the fixture value in the test.
    await use(garagePage);

    // Clean up the fixture.
    // await todoPage.removeAll();
  },

});

export { expect };