var express = require('express');
var UserController = require('./../../controllers/UserController');
var TokenUtilities = require('./../middlewares/TokenUtilities');

var router = express.Router();
var UserRoutes = (function () {
    function UserRoutes() {
        this._controller = new UserController();
    }
    Object.defineProperty(UserRoutes.prototype, "routes", {
        get: function () {
            var controller = this._controller;
            router.post('/users', controller.create);
            router.get('/users', TokenUtilities.validateToken, controller.retrieve);
            router.get('/users/:orderby', controller.retrieve);
            router.get('/users/:limit/:skip', controller.retrieve);
            router.get('/users/:orderby/:limit/:skip', controller.retrieve);
            router.put('/users/:id', controller.update);
            router.delete('/users/:id', controller.delete);
            router.get('/users/:id', controller.findById);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return UserRoutes;
})();

Object.seal(UserRoutes);
module.exports = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map
