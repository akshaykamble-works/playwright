import { test, expect } from '@playwright/test';

test('Verify locators in Playwright', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    const usernameLocator = page.locator('//input[@name="email"]');
    const passwordLocator = page.locator('//input[@type="password"]');
    const loginButtonLocator = page.locator('//button[@name="login"]');

    // Check visibility
    const isUsernameVisible = await usernameLocator.isVisible();
    const isPasswordVisible = await passwordLocator.isVisible();
    const isLoginVisible = await loginButtonLocator.isVisible();

    if (isUsernameVisible && isPasswordVisible && isLoginVisible) {
        await usernameLocator.fill('Playwright@velocity.com');
        await passwordLocator.fill('Playwright@123');
        await loginButtonLocator.click();
    } else {
        console.log('Oops... locators are not visible');
    }
});