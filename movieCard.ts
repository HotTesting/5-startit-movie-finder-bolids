import { browser, $, $$, element, by } from "protractor";

describe("Movie card ", async function() {
  it("should have name", async function() {
    await browser.get("/");
    let cardNameFirst = await element.all(by.css(".text-ellipsis")).first();
    let cardNameDailFirst = await element(by.css('a[href*="/movie/19404"]')).getText();
    let cardNameLast = await $$(".text-ellipsis").last().getText();
    let cardNameMinion = await element(by.css('a[href*="/movie/211672"]'));
    console.log(await cardNameFirst.getText());
    console.log(await cardNameLast);
    console.log(await cardNameMinion.getText());
    expect(await cardNameMinion.isDisplayed()).toBe(true);

    let cardNameMinionA = await element(by.css('.text-ellipsis a[href*="/movie/211672"]')).getAttribute("title");
    console.log(await cardNameMinionA);

    expect(await cardNameMinionA).toBe("Minions");
  });

  it('should have "raiting" pointer', async function() {
    await browser.get("/");
    let raitingPointerFirst = await $$("movie-card").first().$("p small");
    let movieCardRitingMinion = $$("movie-card").get(30).$("small");
    console.log(await raitingPointerFirst.getText());
    console.log(await movieCardRitingMinion.getText());
  });

  it('should open appropriate "movie details" page, after click on "name" field', async function() {
    await browser.get("/");
    let cardNameMinionA = await element(by.css('.text-ellipsis a[href*="/movie/211672"]'));
    await cardNameMinionA.click();
    let openedCard = await $$(".col-xs-12.col-lg-10").first().$('a[href*="minionsmovie"]');
    await browser.sleep(5000);
    await console.log(openedCard.isPresent().then(null, err => false));
  });
});
