import { test, expect } from '@playwright/test';

test('Verify locators on Facebook', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    const username = page.getByRole('textbox', { name: 'Email address or mobile number' });
    const password = page.getByRole('textbox', { name: 'Password' });
    const loginBtn = page.getByRole('button', { name: 'Log in' });

    // Assertion (auto-wait)
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    await expect(loginBtn).toBeVisible();
if (await username.isVisible() && await password.isVisible() && await loginBtn.isVisible()) {
    await username.fill('Test');
    await password.fill('Test@123');
    await loginBtn.click();
} else {
    console.log('One or more elements are not visible. Cannot perform login.');     
}

// Finding all the links on the page
const allLinks = page.locator('a');
const linkCount = await allLinks.count();
console.log(`Total number of links on the page: ${linkCount}`);

// Loop through each link and print its text content
for (let i = 0; i < linkCount; i++) {
    const linkText = await allLinks.nth(i).textContent();
    console.log(`Link ${i + 1}: ${linkText.trim()}`);
}

});