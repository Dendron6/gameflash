const {By, Key} = require('selenium-webdriver');
chromedriver = require('chromedriver');
const DriverPage = require("../src/driver")
const axios = require("axios");


class ActionPage extends DriverPage {
    constructor() {
        super();
        this.langEng = "English";
        this.langRu = 'Russian';
        this.langUkr = 'Ukrainian';
        this.langGer = 'German';
        this.flag1 = '//header/div[1]/div[1]/ul[1]/li[1]/a[1]';
        this.flag2 = '//header/div[1]/div[1]/ul[1]/li[2]/a[1]';
        this.flag3 = '//header/div[1]/div[1]/ul[1]/li[3]/a[1]';
        this.top100 = '//header/div[1]/ul[1]/li[6]/ul[1]/li[1]/a[1]';
        this.otherButton = "//header/div[1]/ul[1]/li[6]/a[1]";
    }
    async findByXpath(xpath) {
        await driver.findElement(By.xpath(xpath)).click()
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