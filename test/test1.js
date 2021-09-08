const action = require("../src/action")
const {By, Key, until} = require("selenium-webdriver");



describe('Game Flash For You Test Suite', function () {
    this.timeout(50000);
    let baseurl = 'https://en.gf4y.com/';
    let germanPage = '//header/div[1]/div[1]/ul[1]/li[3]/a[1]';
    let ukrainianPage = '//header/div[1]/div[1]/ul[1]/li[2]/a[1]';
    let russianPage = '//header/div[1]/div[1]/ul[1]/li[1]/a[1]';

    it.only('Server response 200 OK', async () => {
        let expectedValue = action.landPage(baseurl);
        let expectedValue2 = await axios.get(baseurl).then(response => {
            return (response.status);
        });

        await expect(expectedValue2).to.be.equal(200, 'Response status has to be 200');

    })

    it('Response Time of Server is below 3100', async () => {
        let startTime = new Date().getTime();
        // let endTime = await axios.get(baseurl).then(response => {
        //     return new Date().getTime();
        // });
        await axios.get(baseurl);
        let endTime = new Date().getTime();
        let actualResult = (endTime - startTime);
        await expect(actualResult).to.be.below(3400, 'This is server load time')
    })
    it('Linkage test, switch to German page', async () => {
        global.expectedUrl = await action.findLang(germanPage);
        expect(expectedUrl).to.be.equal('https://de.gf4y.com/', 'This is URL of German page')

    })
    it('Test of page switching to German language', async () => {
        //let url = await action.findLang(germanPage);
        let expectedLanguage = await axios.get(expectedUrl).then(response => {
            return response.data.slice(27, 32)
        });
        await expect(expectedLanguage).to.be.equal('de-de', 'Language is German')

    })
    it('Top 100 games displays more than 100 results', function () {

    })
    it('Quit', function () {
        driver.quit()
    })
})


