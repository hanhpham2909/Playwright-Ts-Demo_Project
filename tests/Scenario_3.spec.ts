import {test, expect } from '@playwright/test'

test.describe('SCENARIO', async () => {
    test('Flow 1', async ({page}) => {
    await page.goto('https://www.icc-cricket.com/');
    await page.locator('//div[@class="drawer-container light"]').click();
    const menuTab = page.locator('//div[@class="drawer-container__inner"]//div[@class="group relative nav-item-wrapper h-full inline-flex undefined false"]')
    for (const eachMenuTab of await menuTab.all())
    console.log(await eachMenuTab.textContent());
        const expectMenuTab = [
         "Home",
         "Rankings",
         "Fixtures & Results",
         "News",
         "Awards",
         "videos",
         "Teams",
         "100% Cricket",
         "Crictos",
         "Hall of Fame",
         "Criiio",
         "About ICC",
         "Media Releases",
         "Photos",
         "Commercial Opportunities",
         "Travel"   ,
        ]
        await expect( await menuTab.allTextContents()).toEqual(expectMenuTab);
})

    test('Flow 2: Assert the link for each menu tabs', async ({page}) => {
    //     await page.goto('https://www.icc-cricket.com/');
    //     await page.locator('//div[@class="drawer-container light"]').click();
    //     const menuTab = page.locator('//div[@class="menu-list-wrapper"]//div[@class="group relative nav-item-wrapper h-full inline-flex undefined false"]');
    //    for (const eachMenuTab of await menuTab.all())
    // // console.log('Link:',eachMenuTab);
    //     console.log(eachMenuTab.getAttribute('href'));
        await page.goto('https://www.icc-cricket.com/');

        const expectMenuTab = [
            {text: "Home", href: '/'},
            {text: "Rankings", href : '/rankings/'},
            {text:"Fixtures & Results",href : '/fixtures-results/'},
            {text:"News",href : '/news/'},
            {text:"Awards",href: "/awards/"},
            {text:"videos",href:"/videos/"},
            {text:"Teams",href: "/teams/men"},
            {text:"100% Cricket",href: "/100percentcricket/"},
            {text:"Crictos",href: "https://fancraze.com/"},
            {text:"Hall of Fame",href: "/hall-of-fame/"},
            {text:"Criiio",href: "/criiio/"},
            {text:"About ICC",href: "/about/"},
            {text:"Media Releases",href: "/media-releases/"},        
            {text:"Photos",href: "/photos/"},
            {text:"Commercial Opportunities",href: "/commercial-opportunities/index"},
            {text:"Travel",href: "https://www.icctravelandtours.com/icc-mens-t20-world-cup-west-indies-usa-2024/"}
        ]
        const menuTab = page.locator('//div[@class="drawer-container__inner"]//div[@class="group relative nav-item-wrapper h-full inline-flex undefined false"]')

        for (const [index,listItem] of expectMenuTab.entries()){
            const link = menuTab.nth(index).locator('a');
            await expect(link).toHaveText(listItem.text);
            console.log(listItem.text)
            await expect(link).toHaveAttribute('href',listItem.href)
            console.log(listItem.href)
        
        }




    });
})