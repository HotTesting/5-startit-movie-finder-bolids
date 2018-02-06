/* describe("Protractor", function() {
  it("Should be alive", function() {
    expect(true).toBe(true);
  });
}); */

import { browser, $, $$, element, by } from "protractor";

describe("Movie card ", async function() {
  it("should have name", async function() {
    await browser.get("/");
    let cardNameFirst = await element.all(by.css(".text-ellipsis")).first();
    let cardNameDailFirst = await element(
      by.css('a[href*="/movie/19404"]')
    ).getText();
    //let cardNameAr = await $$("movie-card");
    let cardNameLast = await $$(".text-ellipsis")
      .last()
      .getText();
    let cardNameMinion = await element(by.css('a[href*="/movie/211672"]'));
    console.log(await cardNameFirst.getText());
    console.log(await cardNameLast);
    console.log(await cardNameMinion.getText());
    //console.log(await cardNameAr);
    expect(await cardNameMinion.isDisplayed()).toBe(true);
  });

  it('should have "raiting" pointer', async function() {
    await browser.get("/");
    //let raitingPointerFirst = await element.all(by.css("movie-card")).first();// example - data about first card
    //let raitingPointerFirst = await element.all(by.css("movie-card")).first().(p small);
    //let raitingPointerAr = await element.all(by.css("movie-card"));
    //let raitingPointerLast = await $$(".movie-card").getCssValue('a[href*="/movie/211672"]');
    let raitingPointerFirst = await $$("movie-card")
      .first()
      .$("p small"); // OK
    //let raitingMinion = await $('a[href*="/movie/211672"]').$('p small')
    //let raitingPointerMinion = await element(by.css(['a[href*="/movie/211672"]'][".pull-right"]);
    //let raitingPointerDailFirst = await element(by.css(a[href*="/movie/19404"]).(".small"));
    let movieCardRitingMinion = $$("movie-card")
      .get(30)
      .$("small"); //OK
    //let raitingMinion = await element(by.css('a[href*="/movie/19404"]')).$('p small')

    console.log(await raitingPointerFirst.getText());
    console.log(await movieCardRitingMinion.getText());
  });

  it(
    'should open appropriate "movie details" page, after click on "name" field'
  ),
    async function() {
      await browser.get("/");
      let cardNameMinion = await element(by.css('a[href*="/movie/211672"]'));
      let openedCard = await $$(".col-xs-12.col-lg-10").$(
        'a[href*="http://www.minionsmovie.com/"]'
      );
      await cardNameMinion.click();
      await browser.sleep(5000);
      await console.log(openedCard.isPresent().then(null, err => false));

      /* await browser.waitForAngularEnabled(false) 
        await browser.get('/')
        let nameofFilm = await $(`[class*="ellipsis"] a[href*="211672"]`).click()
        await browser.sleep(5000)
        await expect(element(by.xpath(`//p[contains(.,'Kevin and Bob are recruited')]`)).getText()).toContain('to take overd')
        console.log (await element(by.xpath(`//p[contains(.,'Kevin and Bob are recruited')]`)).getText()) */

      //let movieCardMinionLink = await $$('movie-card').get(30).$('.text-ellipsis a');
      //let movieNameCardText = await movieCardMinionLink.getText()
      //let movieCardMinionDetail = await $('.row >div:nth-child(2) > h2')
      //expect(await movieCardMinionDetail.getText()).toContain(movieNameCardText)
      // await openedCard.getAttribute('href').getText().toContain('Kevin and Bob are recruited');
      // await browser.sleep(5000)
      //console.log(openedCard.getAttribute('href').getText()) // ???no result in console??? */

      /*  await browser.get('https://movies-finder.firebaseapp.com');
       let movie = await $$('.text-ellipsis a').first().click()
        await browser.sleep(5000)
       expect(browser.getCurrentUrl()).toBe('https://movies-finder.firebaseapp.com/movie/19404') */
    };
});
