import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC, ElementArrayFinder } from 'protractor'

export class HomePage {
    private movieNameLink = $(' div.caption > h4.text-ellipsis a[title = "Minions"]')
    private movieNameText = $(' div.caption > h4.text-ellipsis a[title = "Minions"]').getText()
    private popularSeriesButton = $$('#navbar li:nth-child(2)')
    private popularSeries = $$('app-popular-series div.col-sm-6.col-md-4.col-lg-3.col-xs-6')

    async openOnClcik() {
    await this.movieNameLink.click()
    }

    async popularSeriesBtnClick() {
    await this.movieNameLink.click()
    }
    
    async popularSeriesGet(): Promise<any>  {
       await browser.wait(EC.visibilityOf(this.popularSeries.first()))
       return this.popularSeries
    }

    async open() {
    await browser.get("/");
    }
   
/*     private searchField = $('input[name="searchStr"]')
    private foundMovies = $$('movies > div > div.row.is-flex movie-card')
    async searchFor(search_request: string | number) {
        await this.searchField.sendKeys(search_request, Key.ENTER);
    }

    async getFoundMovies(): Promise<any> {
       // await browser.sleep(3000)
        await browser.wait(EC.visibilityOf(this.foundMovies.first()), 5000, 'Movies not loaded!')
        return this.foundMovies
    }

    async getFoundMoviesTitles() {
       return (await this.getFoundMovies()).$$('a[title]').first().getAttribute('title')
    } */
}