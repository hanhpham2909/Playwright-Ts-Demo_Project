import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage{
        readonly page : Page ;
        readonly logoLocator : Locator;
        readonly searchIcon : Locator ; 
        readonly searchInput: Locator;

    constructor (page: Page){
        this.page = page;
        this.logoLocator= page.locator('//div[@id="logo_sxHbjzw4Tbmqzr1HvttIu"]//img[@alt="Header Logo"]');
        this.searchIcon = page.getByAltText('Search');
        this.searchInput= page.getByPlaceholder('what are you looking for?');
    
    }
    
    async goto(){
        await this.page.goto('https://www.icc-cricket.com/tournaments/cricketworldcup');
    }
    
    async VerifyUrlContains(text: string){
        expect (this.page.url()).toContain(text);

    }

    async PerformSearch(term: string){
        await this.searchIcon.click();
        await this.searchInput.fill(term);
        await this.searchInput.press('Enter')
        await this.page.waitForLoadState();
    }

    async VerifySearchResults(term : string){
        await expect(this.page.url()).toContain(term);


    }
    async checkLogo(){
        await this.goto
        await expect(this.logoLocator).toBeVisible();
    }
}