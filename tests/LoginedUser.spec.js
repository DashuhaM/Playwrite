import { test, expect } from '../fixtures/userGaragePage.js';

test('User can open Garage page', async ({ userGaragePage }) => {
    console.log(await userGaragePage.page.url());
    await expect(userGaragePage.AddCarBtn).toBeVisible();
   
});