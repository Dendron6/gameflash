const {Builder, By, Key, until} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const DriverPage = require("../src/driver")



class ActionPage extends DriverPage {

     async landPage(url) {
         await axios.get(url).then(response => {
            return (response.status);
        });

    }

    async findLang(xpath) {
        await driver.findElement(By.xpath(xpath)).sendKeys(Key.RETURN)
        return driver.getCurrentUrl()

    }

    getLangConformation(x) {
        axios.get(x).then(response => {
            return response.data.slice(27, 32)
        })
    }
}

module.exports = new ActionPage();
