// youtubePage.js
class YouTubePage {
    constructor(page) {
      this.page = page;
    }
  
    async open() {
      await this.page.goto('https://www.youtube.com');
    }
  
    async search(query) {
      await this.page.type('input#search', query);
      await this.page.press('input#search', 'Enter');
    }
  
    async waitForSearchResults() {
      await this.page.locator('ytd-video-renderer.ytd-item-section-renderer').first().waitFor();
    }
  
    async getSearchResults() {
      return await this.page.$$('ytd-video-renderer.ytd-item-section-renderer');
    }
  
    async searchWithIncorrectTitle(query) {
      await this.search(query);
      await this.page.pause();  // Pause for debugging
    }
  
    async findIncorrectTitleElement(title) {
      return await this.page.$(`div#search-results div#contents ytd-video-renderer:has-text("${title}")`);
    }
  }
  
  module.exports = YouTubePage;