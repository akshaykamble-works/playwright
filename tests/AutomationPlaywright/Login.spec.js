import { test, expect } from '@playwright/test';

test('Verify CSS selector locators in Playwright', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Wait for username field (important for this app)
    await page.waitForSelector('input[name="username"]');

    // CSS Selectors
    const usernameInput = page.locator('input[name="username"]');
    await usernameInput.fill('Admin');

    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('admin123');

    // Click login button
    await page.locator('button[type="submit"]').click();

    
});