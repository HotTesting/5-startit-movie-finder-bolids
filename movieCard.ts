import { browser, $, $$, element, by} from 'protractor'

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
    
<<<<<<< HEAD
    let cardNameMinionA = await element(by.css('.text-ellipsis a[href*="/movie/211672"]')).getAttribute('title');
   console.log(await cardNameMinionA);
 
   expect(await cardNameMinionA).toBe('Minions');
    
=======
>>>>>>> c5c845178878272fd0e8d1157b085794053a9267
  });

   it('should have "raiting" pointer', async function() {
    await browser.get("/");
<<<<<<< HEAD
    //let raitingPointerFirst = await element.all(by.css("movie-card")).first().(p small);
    //let raitingPointerAr = await element.all(by.css("movie-card"));
    //let raitingPointerLast = await $$(".movie-card").getCssValue('a[href*="/movie/211672"]');
    let raitingPointerFirst = await $$("movie-card").first().$('p small');
    //let raitingMinion = await $('a[href*="/movie/211672"]').$('p small')
    //let raitingPointerMinion = await element(by.css(['a[href*="/movie/211672"]'][".pull-right"]);
    //let raitingPointerDailFirst = await element(by.css(a[href*="/movie/19404"]).(".small"));
    let movieCardRitingMinion = $$('movie-card').get(30).$('small');
=======
    let raitingPointerFirst = await $$("movie-card").first().$('p small');
    let movieCardRitingMinion = $$('movie-card').get(30).$('small');
    //let raitingPointerFirst = await element.all(by.css("movie-card")).first().(p small);
    //let raitingPointerAr = await element.all(by.css("movie-card"));
    //let raitingPointerLast = await $$(".movie-card").getCssValue('a[href*="/movie/211672"]');
    //let raitingMinion = await $('a[href*="/movie/211672"]').$('p small')
    //let raitingPointerMinion = await element(by.css(['a[href*="/movie/211672"]'][".pull-right"]);
    //let raitingPointerDailFirst = await element(by.css(a[href*="/movie/19404"]).(".small"));
>>>>>>> c5c845178878272fd0e8d1157b085794053a9267
    //let raitingMinion = await element(by.css('a[href*="/movie/19404"]')).$('p small')
    
    console.log(await raitingPointerFirst.getText())
    console.log(await movieCardRitingMinion.getText())
  });
  
<<<<<<< HEAD
    fit('should open appropriate "movie details" page, after click on "name" field', async function(){
    await browser.get("/");  
    let cardNameMinionA = await element(by.css('.text-ellipsis a[href*="/movie/211672"]'))
    //let cardNameMinion = await element(by.css('.text-ellipsis a[href*="/movie/211672"]'))
    //let cardNameMinion = await element(by.css('a[href*="211672"]'));
    //let openedCard = await $$('.col-xs-12.col-lg-10').$('a[href*="http://www.minionsmovie.com/"]')
    
    await cardNameMinionA.click();
    //let openedCard = $$('movie-card').get(30).$('a[href*="minigit addonsmovie"]')
    let openedCard = await $$('.col-xs-12.col-lg-10').first().$('a[href*="minionsmovie"]');
    await browser.sleep(5000)
    await console.log((openedCard.isPresent().then(null, err => false)))

    })
=======
    it('should open appropriate "movie details" page, after click on "name" field'), async function(){
    await browser.get("/");   
    let cardNameMinion = await element(by.css('a[href*="/movie/211672"]'));
    let openedCard = await $$('.col-xs-12.col-lg-10').$('a[href*="http://www.minionsmovie.com/"]')
    await cardNameMinion.click();
    await browser.sleep(5000)
    await console.log((openedCard.isPresent().then(null, err => false))) // no result

    }
  
>>>>>>> c5c845178878272fd0e8d1157b085794053a9267
}); 
