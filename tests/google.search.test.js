const { test, expect } = require('@playwright/test');
const { GooglePage } = require('../pages/GooglePage');

test.describe('Google Search Tests', () => {

  test('Google homepage should have correct title', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.goto();
    const title = await googlePage.getTitle();
    expect(title).toContain('Google');
  });

  test('Google homepage URL should be correct', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.goto();
    expect(page.url()).toContain('google.com');
  });

  test('Search box should be visible on homepage', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.goto();
    await expect(googlePage.searchBox).toBeVisible();
  });

});