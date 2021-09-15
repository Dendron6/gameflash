const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
const expect = require('chai').expect;
const axios = require("axios");


module.exports = class DriverPage {
    constructor() {
        global.driver = driver
        global["expect"] = expect
        global["axios"] = axios


    }
}






