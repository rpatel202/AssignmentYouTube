// tests.js
const { test, expect } = require('@playwright/test');
const YouTubePage = require('../pages/youtubePO');

test('Search for a specific video by its title', async ({ page }) => {
  const youTubePage = new YouTubePage(page);

  await youTubePage.open();
  await youTubePage.search('playwright setup');
  await youTubePage.waitForSearchResults();

  const searchResults = await youTubePage.getSearchResults();
  expect(searchResults.length).toBeGreaterThan(0);
});

test('Search for a video by its title', async ({ page }) => {
  const youTubePage = new YouTubePage(page);

  await youTubePage.open();
  await youTubePage.searchWithIncorrectTitle('playwright setup');

  // Add assertions to validate the search results
  const incorrectTitle = await youTubePage.findIncorrectTitleElement('playwright');
  expect(incorrectTitle).not.toBeNull();
   /**
    * Searched with query: playwright setup.
    * Verifying the search query result should have playwright in title.
    * Added wrong assertion on the result verification query.
    * It will pause to help us debug and findout why its failing.
    */
});





