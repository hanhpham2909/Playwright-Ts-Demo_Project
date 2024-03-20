import {test, expect } from '@playwright/test'
import { HomePage } from '../page/home.page';

test.describe('SCENARIO 6', async ()  => {


    test('Apply page object model into scenario 1', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await homePage.VerifyUrlContains('cricket') ;
        await homePage.logoLocator;
     
        // const logoLocator =  page.locator('//div[@id="logo_sxHbjzw4Tbmqzr1HvttIu"]//img[@alt="Header Logo"]');
        await expect(homePage.logoLocator).toBeVisible();
    })


    test('Apply page object model into scenario 2', async ({page}) => {
        const homePage = new HomePage(page);
        // search for a country
        await homePage.goto();
        // await page.locator('//span[@class="font-cta inline"]').click();
        await homePage.searchIcon.click();
        await page.waitForURL('**/search');
        await homePage.PerformSearch("IRE");
        // const navigationPromise = page.waitForNavigation();
        // await page.keyboard.press('Enter');
        // await  page.waitForNavigation();
        // await expect(page).toHaveURL("https://www.icc-cricket.com/search?q=Indian"); -- sai yêu cầu đề
        await homePage.VerifySearchResults('IRE');
        // await expect(page.url()).toContain("search?q=IRE")
        
    
    })
})