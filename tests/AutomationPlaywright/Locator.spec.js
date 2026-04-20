/*
Locators in Playwright
Locators are used to find elements on a web page. Playwright provides several methods to locate elements, such as by CSS selectors, XPath, text content, and more.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).    


*/
import { test, expect } from '@playwright/test';

test('Verify locators in Playwright', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Using getByRole to locate the login button
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeVisible();

    // Using getByText to locate the "Swag Labs" text
    const orangeHRMText = page.getByAltText('company-branding');
    await expect(orangeHRMText).toBeVisible();

    // Using getByLabel to locate the username input field
    const usernameInput = page.getByPlaceholder('Username');
    await expect(usernameInput).toBeVisible();
    usernameInput.fill('Admin');

    // Using getByPlaceholder to locate the password input field
    const passwordInput = page.getByPlaceholder('Password');
    await expect(passwordInput).toBeVisible();
    passwordInput.fill('admin123');
    const forgotPasswordLink = page.getByText('Forgot your password?');
    await expect(forgotPasswordLink).toBeVisible();

    const text_All_rights_reserved_Link=page.getByText('All rights reserved.');
    await expect(text_All_rights_reserved_Link ).toBeVisible();

    const logoImage=page.getByAltText('company-branding');
    await expect(logoImage).toBeVisible();

    await loginButton.click();
});
