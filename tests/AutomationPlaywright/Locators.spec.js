// Locators in Playwright
// Locators are used to find elements on a web page. Playwright provides several methods to locate elements, such as by CSS selectors, XPath, text content, and more.
/*
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
    await page.goto('https://www.saucedemo.com/');

    // Using getByRole to locate the login button
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeVisible();

    // Using getByText to locate the "Swag Labs" text
    const swagLabsText = page.getByText('Swag Labs');
    await expect(swagLabsText).toBeVisible();

    // Using getByLabel to locate the username input field
    const usernameInput = page.getByPlaceholder('Username');
    await expect(usernameInput).toBeVisible();
    usernameInput.fill('standard_user');

    // Using getByPlaceholder to locate the password input field
    const passwordInput = page.getByPlaceholder('Password');
    await expect(passwordInput).toBeVisible();
    passwordInput.fill('secret_sauce');


    const imagetextLocator = page.getByText('Accepted usernames are:');
    await expect(imagetextLocator).toBeVisible();


    // Click the login button
    await loginButton.click();

    const imageLocator = page.getByAltText('Sauce Labs Backpack');
    await expect(imageLocator).toBeVisible();



});