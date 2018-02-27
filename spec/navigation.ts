import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC, ElementArrayFinder } from 'protractor'

import { HomePage } from './pageObjects/navigation'

describe("Navigation ", async function() {

    const homePage = new HomePage()

    beforeEach(async function () {
    await homePage.open()
    })

  it('should open "Upcoming movies" section', async function() {
    let upcoming = await element(by.partialLinkText("Upcoming"));
    await upcoming.click();
    expect((await homePage.getOpenedSectionName()).getText()).toContain("Up Coming Movies"); 
  });

  it('should open "Popular Series" section', async function(){
    let popular = await element(by.partialLinkText("Popular Series"));
    await popular.click();
    expect((await homePage.getOpenedSectionName()).getText()).toContain("Popular Series");
    });

  it('should open "Action" category', async function(){
    let action = await element(by.partialLinkText("Action"));
    await action.click();
    expect((await homePage.getOpenedSectionName()).getText()).toContain("Action")
    });
});
