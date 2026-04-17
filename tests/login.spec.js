const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open Facebook
  await page.goto('https://www.facebook.com/');

  // Enter email
  await page.fill('#email', 'your_email_here');

  // Enter password
  await page.fill('#pass', 'your_password_here');

  // Click login button
  await page.click('button[name="login"]');

  // Wait for homepage to load (you can customize this)
  await page.waitForTimeout(5000);

  console.log("Login attempted!");

  // Close browser
  await browser.close();
})();