import { browser, $, $$, element, by, By, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai' 
describe('Movie details', async function () {
    beforeEach(async function(){
    await browser.sleep(300)
    await browser.get('/')
    await browser.sleep(500)
    })

    it('should have movie name as header', async function () {
    let movieNameLink = await $(' div.caption > h4.text-ellipsis a[title = "Minions"]')
    let movieNameText = await $(' div.caption > h4.text-ellipsis a[title = "Minions"]').getText()
    let openedMovieName = await $('div.row > div:nth-child(2) > h2')
    await movieNameLink.click()
    await browser.wait(EC.visibilityOf(openedMovieName), 2000, 'movie details have not uploaded')
    expect(await openedMovieName.getText()).to.contain(movieNameText)
    console.log('should have movie name as header', '=' , movieNameText)
    })

    it('should have raiting', async function () {
        let movieNameLink = await $(' div.caption > h4.text-ellipsis a[title = "Minions"]')
        let movieNameText = await $(' div.caption > h4.text-ellipsis a[title = "Minions"]').getText()
        let movieRating = $('h2 > small.label')
        await movieNameLink.click()
        await browser.wait(EC.visibilityOf(movieRating), 2000, 'movie details have not uploaded')
        expect(movieRating.getText()).not.to.be.empty
        
        console.log('Movie ' + movieNameText + ' with raiting ' + await movieRating.getText());
    })

    it('should have simular movies block with atleast one movie', async function () {
        let movieNameLink = await $('div.caption > h4.text-ellipsis a[title = "Minions"]')
        let similarMoviesBlock = $$('div.row.is-flex > div.col-md-2> movie-card');  
        let name = 'Minions'
        await movieNameLink.click()
        await browser.wait(EC.visibilityOf(similarMoviesBlock.first()), 2000, 'movie details have not uploaded')
        expect(await similarMoviesBlock.count()).to.be.above(0)
        console.log('Similar movie block comtains ' + await (similarMoviesBlock).getText())
        //await expect(similarMoviesBlock).contain(name)
        //with this row Failed with message: 
        // "Failed: object tested must be an array, a map, an object, a set, a string, or a weakset, but object given"
        
    })


    describe('cast block', async function () {
        it('should show atleast one actor', async function () {
            let movieNameLink = await $(' div.caption > h4.text-ellipsis a[title = "Minions"]')
            let castActors = $$('div.thumbnail h6.text-center a')

            await movieNameLink.click()
            await browser.wait(EC.visibilityOf(castActors.first()), 2000, 'actors cast has not uploaded')
            expect(await castActors.count()).to.be.above(0)
            console.log('Similar movie block comtains ' + await (castActors).getText())
        })
    })

    describe('reviews block', function () {
           beforeEach(async function () {
            await browser.get('/',1000)
            let movieNameLink = $(' div.caption > h4.text-ellipsis a[title = "Minions"]')
            await movieNameLink.click()
        })
        it('should be atleast one review', async function () {
            let reviewsBlock = $$('app-movie div.col-md-6')

            await browser.wait(EC.visibilityOf(reviewsBlock.first()), 2000, 'reviews has not uploaded')
            expect(await reviewsBlock.count()).to.be.above(0)
            console.log('Movie review is: ' + await (reviewsBlock).getText())
        }) 

        it('should have reviewer name as link to source', async function () {
            let reviewerNames = $$('app-movie div.col-md-6 cite a')

            await browser.wait(EC.visibilityOf(reviewerNames.first()), 2000, 'reviews has not uploaded')
            let reviewerNamesLinks: any = await reviewerNames.getAttribute('href')
            await reviewerNamesLinks.forEach(link => {
            expect(link).to.contain('https://www.themoviedb.org')
            })
            console.log('Reviewer name is: ' + await (reviewerNames).getText())
    })
})


 describe('Popular series', async function () {
     beforeEach(async function() {
        await browser.get('/', 1000)
        let popularSeriesButton = $$('#navbar li:nth-child(2)')
        await popularSeriesButton.click()
    })
   it('shouldnt have search bar', async function () {
        let searchInput = $('input[name="searchStr"]')
        let popularHeader = $('nav.navbar-nav')
        let popularSeries = $$('app-popular-series div.col-sm-6.col-md-4.col-lg-3.col-xs-6')
        await browser.wait(EC.and(EC.visibilityOf(popularSeries.first()), 
        EC.invisibilityOf(searchInput)), 2000, 'series has not been uploaded')
        console.log('No search bar ')

    }) 

    it('should have "First Air Date" instead "Release Date"', async function () {
        let releaseDate = $('div.caption p strong')
        let popularHeader = $('nav.navbar-nav')
        let popularSeries = $$('app-popular-series div.col-sm-6.col-md-4.col-lg-3.col-xs-6')

        await browser.wait(EC.visibilityOf(popularSeries.first()), 2000, 'series has not been uploaded')
        expect(await releaseDate.getText()).to.contain('First Air Date:')
        console.log('Instead of "Release Date" is: ' + await (releaseDate).getText())
    })
}) 
})