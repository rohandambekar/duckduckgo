const Page = require('./page');

class SettingsPage extends Page {
    get darkLabel () { return $('//label[text()="Dark"]') }

    get saveAndExitBtn () { return $('//class[text()="Save and Exit"]') }

    get darkBackground () { return $('//html[contains(@class, "dark-bg")]') }


}

module.exports = new SettingsPage();
