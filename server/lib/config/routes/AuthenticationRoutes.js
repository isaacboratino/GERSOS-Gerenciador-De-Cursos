var express = require('express');
var AuthenticationController = require('./../../controllers/AuthenticationController');

var router = express.Router();
var AuthenticationRoutes = (function () {
    function AuthenticationRoutes() {
        this._controller = new AuthenticationController();
    }
    Object.defineProperty(AuthenticationRoutes.prototype, "routes", {
        get: function () {
            var controller = this._controller;
            router.post('/auth', controller.authenticate);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return AuthenticationRoutes;
})();

Object.seal(AuthenticationRoutes);
module.exports = AuthenticationRoutes;
//# sourceMappingURL=AuthenticationRoutes.js.map
