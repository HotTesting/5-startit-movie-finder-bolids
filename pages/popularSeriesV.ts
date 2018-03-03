import { browser, $, $$, element, by, Key, ExpectedConditions as EC} from 'protractor'
import { async } from 'q';

export class PopularSeries {
   private allMovies = $$('app-popular-series > div > div > div.col-sm-6.col-md-4.col-lg-3.col-xs-6');
   private searchField = $('input[name="searchStr"]');
   private sectionHeader = $('h3.orange-text');
   public SECTION_LINK = 'https://movies-finder.firebaseapp.com/popular/series';
   public SECTION_HEDER = 'Popular Series';
   
   async pageLoaded() {
        await browser.wait(EC.and
            (EC.visibilityOf(this.allMovies.last()),
            EC.invisibilityOf(this.searchField)), 20000, 'popular series should appear in 20 seconds, but it doesnt')
    }

    async getSectionHeader() {
        return this.sectionHeader.getText();
    }
}
