import {test, expect, chromium } from '@playwright/test'


    test('Scenario 5', async({page}) => {
        // await page.goto('https://www.icc-cricket.com/');
        // await page.waitForLoadState();
        // await page.locator('//img[@alt="coca-cola"]').click();
        // const pagePromise = await page.waitForEvent('popup');
        // const cocaPage = await pagePromise;
        // await cocaPage.waitForLoadState();
        // console.log (await page.title ())
        // await expect(await page.title()).toEqual("The Coca-Cola Company: Refresh the World. Make a Difference");
        // await page.close();                        
        
        await page.goto('https://www.icc-cricket.com/');
        await page.locator('//img[@alt="coca-cola"]').waitFor();

        //click on the link and wait for the new tab to get trigged
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
             page.locator('//img[@alt="coca-cola"]').click(),
        ])

        // wait for the new page to load
        await newPage.waitForLoadState();
        console.log(await newPage.title());
        
        await expect(newPage).toHaveTitle("The Coca-Cola Company: Refresh the World. Make a Difference");
        await newPage.close();

    })
