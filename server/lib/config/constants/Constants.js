var Constants = (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = 'mongodb://localhost:27017/gersons';
    Constants.TOKEN_SECRET_STRING = 'chavesecreta';
    return Constants;
})();

Object.seal(Constants);
module.exports = Constants;
//# sourceMappingURL=Constants.js.map
