import {test, expect } from '@playwright/test'

test.describe('SCENARIO 1', async ()  => {
    test('Assert url contains cricket', async ({page}) => {
        await page.goto('https://www.icc-cricket.com/tournaments/cricketworldcup');
        await expect(page.url()).toContain("cricket");
       
        const logoLocator =  page.locator('//div[@id="logo_sxHbjzw4Tbmqzr1HvttIu"]//img[@alt="Header Logo"]');
        await expect(logoLocator).toBeVisible();
    })
   
})