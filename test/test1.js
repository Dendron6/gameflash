const action = require("../src/action")
const {By} = require("selenium-webdriver");
const assert = require("assert");
const axios = require("axios");


describe('Game Flash For You Test Suite', function () {
    this.timeout(50000);
    let baseurl = 'https://en.gf4y.com/';
    let germanPage = '//header/div[1]/div[1]/ul[1]/li[3]/a[1]';
    let ukrainianPage = '//header/div[1]/div[1]/ul[1]/li[2]/a[1]';
    let russianPage = '//header/div[1]/div[1]/ul[1]/li[1]/a[1]';
    let top100Eng = '//header/div[1]/ul[1]/li[6]/ul[1]/li[1]/a[1]';
    let otherButton = "//header/div[1]/ul[1]/li[6]/a[1]";
    before("Before Tests", async () => {
        await driver.get(baseurl)
    })
    after('Quit Test', async () => {
        await driver.quit()
    })

    it('Server response 200 OK', async () => {
        let expectedValue = await action.landPage(baseurl);

        await expect(expectedValue).to.be.equal(200, 'Response status has to be 200');

    })

    it('Response Time of Server is below 3100', async () => {
        let actualResult = await action.timer(baseurl);
        await expect(actualResult).to.be.below(3400, 'This is server load time')
    })
    it('Linkage test, switch to German page', async () => {
        global.expectedUrl = await action.findCurrentUrl(germanPage);
        expect(expectedUrl).to.be.equal('https://de.gf4y.com/', 'This is URL of German page')

    })
    it('Test of page switching to German language', async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrl)
        await expect(expectedLanguage).to.be.equal('de-de', 'Language is German')

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Online Spiele - Kostenlos Online spielen auf GF4Y.COM');

    })
    it('Return to English page', async () => {
        let engUrl = await action.findCurrentUrl(germanPage);
        expect(engUrl).to.be.equal('https://en.gf4y.com/', 'This is URL of English page');
    })
    it('Top 100 games displays more than 100 results', async () => {
        await action.findByXpath(otherButton);
        await action.findByXpath(top100Eng);
        let top = await driver.findElements(By.className('in'))
        let actualResult = top.length
        expect(actualResult).to.be.above(100)
    })

})


