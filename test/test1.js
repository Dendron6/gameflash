const action = require("../src/action")

describe('Game Flash For You Test Suite', function () {
    this.timeout(50000);
    var baseurl = 'https://en.gf4y.com/';
    var baseurl1 = 'https://google.com/';
    beforeEach(async () =>{
        await driver.get(baseurl)
    })
    // afterEach(function () {
    // })
    it('Server response 200 OK', async () => {
        let expectedValue = await axios({
            url: baseurl1,
            validateStatus: () => true
        }).then(res => {
            return (res.status);
        });

        await expect(expectedValue).to.be.equal(200, 'Response status has to be 200');

    })

    it('Top 100 games displays more than 100 results', function () {


    })
    it('Switch to German language, language of the page is German', function () {

    })
    it('Quit', function () {
        driver.quit()
    })
})


