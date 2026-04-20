// Demo page 
const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open demo page
  await page.goto('https://www.saucedemo.com/');

  // Wait for the page to load
  await page.waitForTimeout(3000);

  console.log("sauce demo !!");

  // Close browser
  await browser.close();
})();   