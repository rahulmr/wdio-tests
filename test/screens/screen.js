/**
 * Created by titusfortner on 11/23/16.
 */
function Screen () {
}

Screen.prototype.open = function (path) {
    browser.url('/' + path)
};

module.exports = new Screen();