const action = require("../src/action")
const {By} = require("selenium-webdriver");


describe('Ukrainian Game Flash For You Test Suite', function () {
    this.timeout(50000);
    let baseurl = 'https://ua.gf4y.com/';


    before("Before Tests", async () => {
        await driver.get(baseurl);
    })
    after('Quit Test', async () => {
        await driver.quit();
    })

    it('Server response 200 OK', async () => {
        let expectedValue = await action.landPage(baseurl);

        await expect(expectedValue).to.be.equal(200, 'Response status has to be 200');

    })

    it('Response Time of Server is below 3100', async () => {
        let actualResult = await action.timer(baseurl);
        await expect(actualResult).to.be.below(3400, 'This is server load time');
    })

    //test of Russian language link

    it(`Linkage test, switch to ${action.langRu} page`, async () => {
        global.expectedUrlX = await action.findCurrentUrl(action.flag1);
        expect(expectedUrlX).to.be.equal('https://gf4y.com/', `This is URL of ${action.langRu} page`);

    })
    it(`Switching to ${action.langRu} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrlX);
        await expect(expectedLanguage).to.be.equal('ru-ru', `Language is ${action.langRu}`);

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Игры онлайн бесплатно | Мини игры на GAME FLASH');

    })
    it(`Return to ${action.langUkr} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag1);
        expect(engUrl).to.be.equal('https://ua.gf4y.com/', `This is URL of ${action.langUkr} page`);
    })


    //Test of English version link

    it(`Linkage test, switch to ${action.langEng} page`, async () => {
        global.expectedUrlY = await action.findCurrentUrl(action.flag3);
        expect(expectedUrlY).to.be.equal('https://en.gf4y.com/', `This is URL of ${action.langEng} page`)

    })
    it(`Test of page switching to ${action.langEng} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrlY)
        await expect(expectedLanguage).to.be.equal('en-gb', `Language is ${action.langEng}`)

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Online Games - Play Free Online Games on GF4Y.COM');

    })
    it(`Return to ${action.langUkr} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag2);
        expect(engUrl).to.be.equal('https://ua.gf4y.com/', `This is URL of ${action.langUkr} page`);
    })

    //test of German version link

    it(`Linkage test, switch to ${action.langGer} page`, async () => {
        global.expectedUrlZ = await action.findCurrentUrl(action.flag2);
        expect(expectedUrlZ).to.be.equal('https://de.gf4y.com/', `This is URL of ${action.langGer} page`)

    })
    it(`Switching to ${action.langGer} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrlZ)
        await expect(expectedLanguage).to.be.equal('de-de', `Language is ${action.langGer}`)

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Online Spiele - Kostenlos Online spielen auf GF4Y.COM');

    })
    it(`Return to ${action.langUkr} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag2);
        expect(engUrl).to.be.equal('https://ua.gf4y.com/', `This is URL of ${action.langUkr} page`);
    })


    it('Top 100 games displays more than 100 results', async () => {
        await action.findByXpath(action.otherButton);
        await action.findByXpath(action.top100);
        let top = await driver.findElements(By.className('in'))
        let actualResult = top.length
        expect(actualResult).to.be.above(100)
    })

})

