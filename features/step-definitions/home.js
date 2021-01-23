const { Given, When, Then } = require('cucumber');
const assert = require('assert')
const homePage = require('../pageobjects/home.page');
const settingsPage = require('../pageobjects/settings.page');



Given ("I navigated to duckduckgo website", () => {

    browser.url("https://start.duckduckgo.com/")
    
});

When ("I am on the home page", () => {

    const title= browser.getTitle()
    assert.strictEqual('DuckDuckGo — Privacy, simplified.', title, 'Page title is not displayed correctly')
    
});

When ("I look at the page", () => {

});


Then ("I expect to see the duckduckgo logo on the page", () => {
    
    homePage.duckduckgoLogo.waitForDisplayed({timeout: 20000})
    assert.strictEqual(true, homePage.duckduckgoLogo.isDisplayed(), 'duckduckgo logo is not displayed on Home page')
});


When ("I type super into the search box", () => {

    homePage.searchBox.waitForDisplayed({timeout: 10000})
    homePage.searchBox.setValue('super')

});

Then ("I expect to see exactly 10 suggestions in the typeahead dropdown", () => {
    
    assert.strictEqual(true, homePage.suggesstionsList.isDisplayed(), 'Suggesstions list is not displayed after entring Super text')
});


When ("I type supercalafragalistic into the search box", () => {

    homePage.searchBox.waitForDisplayed({timeout: 10000})
    homePage.searchBox.setValue('supercalafragalistic')

});

Then ("I expect the first result to be supercalafragalisticexpialadoshus", () => {
    
    assert.strictEqual('supercalafragalisticexpialadoshus', homePage.expectedFirstSearchResult.getText(), 'Expected Text is not displayed after entring supercalafragalistic text')
});

When ("I click on the hamburger menu in the top right", () => {

    homePage.hamburgerMenu.click()

});

Then ("I expect to see a themes link", () => {
    
    homePage.themesLink.waitForDisplayed({timeout: 10000})
    assert.strictEqual(true, homePage.themesLink.isDisplayed(), 'Themes link is not displayed after clicking on the hamburger menu')
});


When ("I click on the themes link then click on the dark mode theme button", () => {

    homePage.hamburgerMenu.click()
    homePage.themesLink.click()

});


Then ("I click on the dark mode theme button", () => {
    
    settingsPage.darkLabel.waitForDisplayed({timeout: 10000})
    settingsPage.darkLabel.click()
    settingsPage.saveAndExitBtn.click()
});



Then ("My page background should change colour", () => {
    
    const title= browser.getTitle()
    assert.strictEqual('DuckDuckGo — Privacy, simplified.', title, 'Page title is not displayed correctly')
    assert.strictEqual(true, settingsPage.darkBackground.isDisplayed(), 'Background colour is not changed')
});


Given ("I am on the traffic page", () => {
    
    browser.url("https://start.duckduckgo.com/traffic")
});


When ("I click on the 2018 Traffic section", () => {
    
    
});

Then ("I should see all the months listed in the order from Dec to Jan", () => {
    
    
});

Then ("The Total Direct Queries should be equal to the sum of all the total directs from each month", () => {
    
    
});

Then ("", () => {
    
    
});

