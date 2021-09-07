const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
const assert = require('assert');
const expect = require('chai').expect;
const axios = require("axios");
//var jQuery = require('jQuery');

module.exports = class DriverPage {
    constructor() {
        global.driver = driver
        global.assert = assert
        global.expect = expect
        global.axios = axios
        //global.jQuery = jQuery

    }
}




