import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC, ElementArrayFinder } from 'protractor'

export class HomePage {
    private openedSection = $(`[class="orange-text"]`)

    async open() {
          await browser.get("/");
    }
    async getOpenedSectionName(): Promise<any> {
       // await browser.sleep(3000)
        await browser.wait(EC.visibilityOf(this.openedSection.first()), 5000, 'Section is not loaded!')
        return this.openedSection
    }
}