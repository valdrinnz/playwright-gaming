import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Verify Blog Categories', async ({ page }) => {
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

  test.setTimeout(60000);

  allure.description('This test verifies the blog categories displayed on the blog page.');

  // Step 1: Navigate to the home page and take a screenshot
  console.log('Navigating to the home page...');
  await allure.step('Navigate to home page', async () => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Arkadium/);
    await page.waitForLoadState('networkidle');
    // Capture a screenshot
    const screenshotPath = 'screenshots/home_page.png';
    await page.screenshot({ path: screenshotPath });
    // Attach screenshot using allure.attachment()
    allure.attachment('Home Page Screenshot', await page.screenshot(), 'image/png');
  });

  // Step 2: Click the blog button and take a screenshot
  console.log('Locating and clicking the blog button...');
  await allure.step('Click on the blog button', async () => {
    const blogButton = page.locator(locators.blogButton);
    await expect(blogButton).toBeVisible();
    await blogButton.click();
    // Capture a screenshot after clicking the blog button
    const screenshotPath = 'screenshots/blog_button_clicked.png';
    await page.screenshot({ path: screenshotPath });
    allure.attachment('Blog Button Clicked Screenshot', await page.screenshot(), 'image/png');
  });

  // Step 3: Validate blog categories heading and take a screenshot
  console.log('Validating the blog categories heading...');
  await allure.step('Validate the blog categories heading', async () => {
    const blogCategoriesHeading = page.locator(locators.blogCategoriesHeading);
    await expect(blogCategoriesHeading).toBeVisible();
    await expect(blogCategoriesHeading).toHaveText('Blog Categories');
    // Capture a screenshot of the blog categories heading
    const screenshotPath = 'screenshots/blog_categories_heading.png';
    await page.screenshot({ path: screenshotPath });
    allure.attachment('Blog Categories Heading Screenshot', await page.screenshot(), 'image/png');
  });

  // Step 4: Extract and verify blog categories and take a screenshot
  console.log('Extracting and verifying blog categories...');
  await allure.step('Extract and verify blog categories', async () => {
    const blogCategoriesLocator = page.locator(locators.blogCategoriesList);
    const actualCategories = await blogCategoriesLocator.allTextContents();
    expect(actualCategories).toEqual(expectedCategories);
    // Capture a screenshot after extracting categories
    const screenshotPath = 'screenshots/blog_categories_list.png';
    await page.screenshot({ path: screenshotPath });
    allure.attachment('Blog Categories List Screenshot', await page.screenshot(), 'image/png');
  });

  // Add labels and metadata
  allure.label('feature', 'Blog');
  allure.label('severity', 'critical');
  allure.tag('Blog Categories');

  console.log('Blog categories verified successfully!');
});
