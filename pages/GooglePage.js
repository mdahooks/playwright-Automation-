class GooglePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('textarea[name="q"]');
  }
  async goto() {
    await this.page.goto('https://www.google.com');
  }
  async search(query) {
    await this.searchBox.fill(query);
    await this.searchBox.press('Enter');
  }
  async getTitle() {
    return await this.page.title();
  }
}
module.exports = { GooglePage };