var express = require('express');
var bodyParser = require('body-parser');

var MethodOverride = require('./../MethodOverride');
var RoutesBase = require('./../../routes/base/RoutesBase');

var MiddlewareBase = (function () {
    function MiddlewareBase() {
    }
    Object.defineProperty(MiddlewareBase, "configuration", {
        get: function () {
            var app = express();
            app.use(bodyParser.json());
            app.use(MethodOverride.configuration());
            app.use(new RoutesBase().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return MiddlewareBase;
})();

Object.seal(MiddlewareBase);
module.exports = MiddlewareBase;
//# sourceMappingURL=MiddlewareBase.js.map
