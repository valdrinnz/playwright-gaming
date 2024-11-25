import { test, expect } from '@playwright/test';

test('Verify Blog Categories', async ({ page }) => {
  test.setTimeout(60000); 

  const locators = {
    blogButton: 'button[data-element-description="nav-blog-button"]',
    blogCategoriesHeading: 'h3:has-text("Blog Categories")',
    blogCategoriesList: 'h3:has-text("Blog Categories") + ul li a',
  };

  const expectedCategories = [
    "Card Games",
    "Updates",
    "Sweepstakes",
    "Mahjong",
    "Brain Games",
    "Casino Games",
    "Promotions",
    "Game Shows",
    "Puzzle Games",
    "Crosswords",
    "Sudoku",
    "Word Games",
    "General",
    "Pool Games",
    "All"
  ];

  console.log('Navigating to the home page...');
  await page.goto('/'); 
  await expect(page).toHaveTitle(/Arkadium/);

  console.log('Locating the blog button...');
  const blogButton = page.locator(locators.blogButton);
  await expect(blogButton).toBeVisible();
  await blogButton.click();

  console.log('Validating the blog categories heading...');
  const blogCategoriesHeading = page.locator(locators.blogCategoriesHeading);
  await expect(blogCategoriesHeading).toBeVisible();
  await expect(blogCategoriesHeading).toHaveText('Blog Categories');

  console.log('Extracting blog categories...');
  const blogCategoriesLocator = page.locator(locators.blogCategoriesList);
  const actualCategories = await blogCategoriesLocator.allTextContents();

  console.log('Verifying categories...');
  expect(actualCategories).toEqual(expectedCategories);

  console.log('Blog categories verified successfully!');
});
