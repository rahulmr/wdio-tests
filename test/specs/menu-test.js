var expect = require('chai').expect;
var HomeScreen = require('../screens/home.screen'),
    MenuScreen = require('../screens/menu.screen');

describe('Mocha Spec Sync example', function() {
    it("verify Arcs entry in menu", function() {
        HomeScreen.click("Graphics");
        expect(MenuScreen.arcsEntry.isVisible()).to.equal(true);
        MenuScreen.arcsEntry.click().pause(2000);
    });
});
