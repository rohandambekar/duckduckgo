const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors from Home page using getter methods
     */
    get duckduckgoLogo () { return $('//*[@id="logo_homepage_link"]') }

    get searchBox () { return $('//*[@id="search_form_homepage"]') }

    get searchClear () { return $('//*[@id="search_form_input_clear"]') }

    get hamburgerMenu () { return $('//*[@class="header__button--menu  js-side-menu-open"]') }

    get suggesstionsList () { return $('//*[@class="acp-wrap js-acp-wrap"]') }
    
    get expectedFirstSearchResult () { return $('//div[@class="acp-wrap js-acp-wrap"]/div[@data-index=0]') }

    get themesLink () { return $('//div[@class="nav-menu--slideout is-open"]//a[text()="Themes"]') }

    get darkLabel () { return $('//label[text()="Dark"]') }

    get saveAndExitBtn () { return $('//class[text()="Save and Exit"]') }

    get darkBackground () { return $('//html[contains(@class, "dark-bg")]') }
    


}

module.exports = new HomePage();
