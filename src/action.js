const {Builder, By, Key, until, wait} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const DriverPage = require("../src/driver")
const axios = require("axios");


class ActionPage extends DriverPage {
    async findByXpath(xpath) {
        await driver.findElement(By.xpath(xpath)).click()
    }
    async findByXpath1(xpath) {
        await driver.findElements(By.xpath(xpath))
    }

    async timer(url){
        let startTime = new Date().getTime();
        await axios.get(url);
        let endTime = new Date().getTime();
        return (endTime - startTime);
    }
    async landPage(url) {
        const response = await axios.get(url)
        return response.status;

    }

    async findCurrentUrl(xpath) {
        await driver.findElement(By.xpath(xpath)).sendKeys(Key.RETURN)
        return driver.getCurrentUrl()

    }

    async getLangConformation(x) {
        const response = await axios.get(x)
            return response.data.slice(27, 32)

    }
}

module.exports = new ActionPage();
