import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC, ElementArrayFinder } from 'protractor'

import { HomePage } from './ObjectSearch'

describe('Search ', async function () {
    const homePage = new HomePage()

    beforeEach(async function () {
    await homePage.open()
    })

  it('by exisiting name, should show first movie with complete name match', async function () {
       let searchRequestName = 'Minions'
       await homePage.searchFor(searchRequestName)
       let titles = await homePage.getFoundMoviesTitles()
       expect(titles).toBe(searchRequestName)
       console.log(titles)
   })

  it('results(all of them) should contain search request', async function(){

       let searchRequestName = 'Minions'
       await homePage.searchFor(searchRequestName)
       let titles = await homePage.getFoundMoviesTitles()
       await expect(titles.length).toBe(20, 'Number of found movies')
       titles.forEach(title => expect(title).toContain(searchRequestName))
    
  }) 

  it('result should be empty, after request for nonexistent movie', async function () {
   
        let searchRequestName = 'nonexistingName'
        await homePage.searchFor(searchRequestName)
        let titles = await homePage.getFoundMoviesTitles()
        expect(await titles.count()).toBe(0, 'Number of found movies')
    })
}) 

