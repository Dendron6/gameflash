const {Builder, By, Key, until} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
var DriverPage = require("../src/driver")


class ActionPage extends DriverPage{

}

module.exports = new ActionPage();
