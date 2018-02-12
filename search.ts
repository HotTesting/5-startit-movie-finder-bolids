import { browser, element, By, by, until, $, $$, Key } from 'protractor'

describe('Search ', async function () {

  it('by exisiting name, should show first movie with complete name match', async function () {
       await browser.get('/')
       let search = $(`[name="searchStr"]`)
       let name = 'Minions'
       await search.sendKeys(name)
       await search.sendKeys(Key.ENTER)
       await browser.sleep(3000)
       expect(await $$(`[class*="col-lg-3 col-xs-6"] [class="text-ellipsis"] a`).first().getAttribute('title')).toBe(name)
       console.log(await $$(`[class*="col-lg-3 col-xs-6"] [class="text-ellipsis"] a`).first().getAttribute('title'))
   })

  it('results(all of them) should contain search request', async function(){
   
    await browser.get('/')

       let search = $(`[name="searchStr"]`)
       let name = 'Minions'
       await search.sendKeys(name)
       await search.sendKeys(Key.ENTER)
       await browser.sleep(3000)
       let movieNamesList = $$('movies > div:nth-child(3) .text-ellipsis > a[title]')
       expect(await movieNamesList.getText()).toContain(name)
       console.log(await movieNamesList.getText())
    
  }) // Failed: EPIPE write EPIPE

  it('result should be empty, after request for nonexistent movie', async function () {
   
    await browser.get('/')
        let search = $(`[name="searchStr"]`)
        let name = 'nonexistingName'
        await search.sendKeys(name)
        await search.sendKeys(Key.ENTER)
        await browser.sleep(3000)
        let movieNamesList = $$('movies > div:nth-child(3) .text-ellipsis > a[title]')
        expect(await movieNamesList.count()).toBe(0)
        console.log('nonexistingName list empty');
    })
}) 

