import { test, expect } from '@playwright/test';

test('Verify user can login to sauce login page', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.click('(//button[@class="btn btn_primary btn_small btn_inventory "])[1]');



    });