import { browser, $, $$, element, by } from "protractor";

describe("Navigation ", async function() {
  it('should open "Upcoming movies" section', async function() {
    await browser.get("/");
    let upcoming = await element(by.partialLinkText("Upcoming"));
    await upcoming.click();
    let openedUpcomingPage = await $$(".col-xs-12.col-lg-10");
    await browser.sleep(5000);
    expect(await $(`[class="orange-text"]`).getText()).toContain("Up Coming Movies"); 
    console.log((await $(`[class="orange-text"]`).getText()));
  });

  it('should open "Popular Series" section', async function(){
    await browser.get("/");
    let upcoming = await element(by.partialLinkText("Popular Series"));
    await upcoming.click();
    await browser.sleep(5000);
    expect(await $(`[class="orange-text"]`).getText()).toContain("Popular Series");
    console.log(await $(`[class="orange-text"]`).getText()); // is it better use selector or name of expected result?
    });

    it('should open "Action" category', async function(){
    await browser.get("/");
    let upcoming = await element(by.partialLinkText("Action"));
    await upcoming.click();
    await browser.sleep(5000);
    expect(await $(`[class="orange-text"]`).getText()).toContain("Action");
    console.log("Action category is opened"); // is it better use selector or name of expected result?
    });
    
});
