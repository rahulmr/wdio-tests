/**
 * Created by titusfortner on 11/23/16.
 */
var Screen = require('./screen');

var HomeScreen = Object.create(Screen, {
    graphicsTab: {
        get: function () {
            return browser.element(`~Graphics`);
        }
    },

    click: {
        value: function (tabName) {
            if (tabName === "Graphics") {
                this.graphicsTab.click();

            } else {
                throwError("Not implemented");
            }

        }
    }

});

module.exports = HomeScreen;