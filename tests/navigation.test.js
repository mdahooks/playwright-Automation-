const { test, expect } = require('@playwright/test');

test.describe('Navigation Tests', () => {

  test('Google should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('https://www.google.com');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(5000);
  });

  test('Google homepage should not show 404 error', async ({ page }) => {
    const response = await page.goto('https://www.google.com');
    expect(response.status()).toBe(200);
  });

  test('Search box should accept keyboard input', async ({ page }) => {
    await page.goto('https://www.google.com');
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.fill('Hello Playwright!');
    const value = await searchBox.inputValue();
    expect(value).toBe('Hello Playwright!');
  });

});