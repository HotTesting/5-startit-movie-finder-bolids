import { browser, $, $$, element, by, By, ExpectedConditions as EC } from 'protractor'
import { expect } from 'chai' 

import * as log4js from 'log4js'
const logger = log4js.getLogger('SpecLogger')

import { HomePage } from './ObjectLesson5task'

describe('Logger', function () {
    it('can log', async function () {
        let someNiceVariable = 'I am very important!'
        logger.trace('this is trace!')
        logger.debug('this is debug!')
        logger.info('this is info!')
        logger.warn('Something not really bad, but take a look!')
        logger.error('this is error!')
        logger.fatal(`Something terribly wrong! ${someNiceVariable}`)
    })
})

describe('Movie details', async function () {
  const homePage = new HomePage()

    beforeEach(async function () {
    await homePage.open()
    await homePage.openOnClcik()
    })

    it('should have movie name as header', async function () {
    let openedMovieName = await $('div.row > div:nth-child(2) > h2')
    let movieNameText = await $('div.caption > h4.text-ellipsis a[title = "Minions"]').getText()
    await browser.wait(EC.visibilityOf(openedMovieName), 2000, 'movie details have not uploaded')
    expect(await openedMovieName.getText()).to.contain(movieNameText)
    })

    it('should have raiting', async function () {
        let movieRating = $('h2 > small.label')
        await browser.wait(EC.visibilityOf(movieRating), 2000, 'movie details have not uploaded')
        expect(movieRating.getText()).not.to.be.empty

    })

    it('should have simular movies block with atleast one movie', async function () {
        
        let similarMoviesBlock = $$('div.row.is-flex > div.col-md-2> movie-card');  
        await browser.wait(EC.visibilityOf(similarMoviesBlock.first()), 2000, 'movie details have not uploaded')
        expect(await similarMoviesBlock.count()).to.be.above(0)
    })

    describe('cast block', async function () {
         beforeEach(async function () {
         await homePage.open()
         
     })
        it('should show atleast one actor', async function () {
            let castActors = $$('div.thumbnail h6.text-center a')
            await browser.wait(EC.visibilityOf(castActors.first()), 2000, 'actors cast has not uploaded')
            expect(await castActors.count()).to.be.above(0)
        
        })
    })

    describe('reviews block', function () {
         beforeEach(async function () {
         await homePage.open()
         await homePage.openOnClcik()
    })
        })
        it('should be atleast one review', async function () {
            let reviewsBlock = $$('app-movie div.col-md-6')
            await browser.wait(EC.visibilityOf(reviewsBlock.first()), 2000, 'reviews has not uploaded')
            expect(await reviewsBlock.count()).to.be.above(0)
        }) 

        it('should have reviewer name as link to source', async function () {
            let reviewerNames = $$('app-movie div.col-md-6 cite a')
            await browser.wait(EC.visibilityOf(reviewerNames.first()), 2000, 'reviews has not uploaded')
            let reviewerNamesLinks: any = await reviewerNames.getAttribute('href')
            await reviewerNamesLinks.forEach(link => {
            expect(link).to.contain('https://www.themoviedb.org')
            })
    })

 describe('Popular series', async function () {
     beforeEach(async function () {
         await homePage.open()
         await homePage.popularSeriesBtnClick()
    })

   it('shouldnt have search bar', async function () {
        let searchInput = $('input[name="searchStr"]')
        await (homePage.popularSeriesGet, browser.wait (EC.invisibilityOf(searchInput), 2000, 'series has not been uploaded'))

    }) 

    it('should have "First Air Date" instead "Release Date"', async function () {
        let releaseDate = $$('div.caption p strong').first()
        await browser.wait(homePage.popularSeriesGet, 2000, 'series has not been uploaded')
        expect(await releaseDate.getText()).to.contain('First Air Date:')
    })
}) 
})