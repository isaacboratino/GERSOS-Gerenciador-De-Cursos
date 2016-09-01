var express = require('express');

var CursoRoutes = require('./../CursoRoutes');

var app = express();
var RoutesBase = (function () {
    function RoutesBase() {
    }
    Object.defineProperty(RoutesBase.prototype, "routes", {
        get: function () {
            app.use('/', new CursoRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return RoutesBase;
})();

module.exports = RoutesBase;
//# sourceMappingURL=RoutesBase.js.map
