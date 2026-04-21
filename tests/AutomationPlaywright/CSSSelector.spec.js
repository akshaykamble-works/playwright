// CSS Selector locators in Playwright
// CSS selectors are a powerful way to locate elements on a web page. Playwright allows you to use CSS selectors to find elements based on their attributes, classes, IDs, and more.
import {test,expect} from '@playwright/test';

test('Verify CSS selector locatos in playwright',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 const usernameInput =page.locator('input[name="username"]');
 usernameInput.fill('Admin');

 const passwordInput = page.locator('input[name="password"]');
 passwordInput.fill('admin123');

});