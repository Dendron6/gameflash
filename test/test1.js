const action = require("../src/action")


describe('Game Flash For You Test Suite', function () {
    this.timeout(50000);
    var baseurl = 'https://en.gf4y.com/';
    var baseurl1 = 'https://google.com/';
    beforeEach(async () => {
        await driver.get(baseurl)
    })
    afterEach(function () {
    })
    it('Server response 200 OK', async () => {
        let expectedValue = await axios.get(baseurl).then(response => {
            return (response.status);
        });

        await expect(expectedValue).to.be.equal(200, 'Response status has to be 200');

    })

    it('Response Time of Server is below 3100', async () => {

        let startTime = new Date().getTime();
        let endTime = await axios.get(baseurl).then(response => {
            return new Date().getTime();
        });
        let actualResult = (endTime - startTime);
        await expect(actualResult).to.be.below(3100, 'This is server load time')
    })
    it('Switch to German language, language of the page is German', function () {

    })
    it('Top 100 games displays more than 100 results', function () {

    })
    it('Quit', function () {
        driver.quit()
    })
})


