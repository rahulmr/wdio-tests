/**
 * Created by titusfortner on 11/23/16.
 */
var Screen = require('./screen');

var MenuScreen = Object.create(Screen, {
    arcsEntry: {
        get: function () {
            return browser.element(`~Arcs`);
        }
    }
});

module.exports = MenuScreen;