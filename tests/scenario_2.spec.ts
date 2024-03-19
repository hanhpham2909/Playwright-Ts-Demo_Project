import { test, expect } from '@playwright/test';

test('Search and Verify new URL and heading', async ({page}) => {
    // search for a country
    await page.goto('https://www.icc-cricket.com/tournaments/cricketworldcup');
    // await page.locator('//span[@class="font-cta inline"]').click();
    await page.locator('//div//a[@data-id="58939cfd-07a0-4396-8ea1-ce1bdb2fa7ca"]').click();
    await page.waitForURL('**/search');
    await page.getByPlaceholder('what are you looking for?').fill("Indian");
    // const navigationPromise = page.waitForNavigation();
    await page.keyboard.press('Enter');
    await  page.waitForNavigation();
    // await expect(page).toHaveURL("https://www.icc-cricket.com/search?q=Indian"); -- sai yêu cầu đề
    await expect(page.url()).toContain("search?q=Indian")


})