import {test, expect } from '@playwright/test'

test.describe('Scenario 4', async ()=> {
    test('Assert the total number of rows in the table', async({page}) => {
        await page.goto('https://www.icc-cricket.com/tournaments/cricketworldcup/standings');
        const row = page.locator('//div[@class="si-table-row"]');
        await expect(row).toHaveCount(11);
        await expect(row.nth(2)).toHaveClass(/si/)
        await expect(row.nth(3)).toHaveCSS('border-bottom',/0.8px*/);
                                        
    })
})