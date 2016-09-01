var methodOverride = require('method-override');
var express = require('express');
var morgan = require('morgan');

var MethodOverride = (function () {
    function MethodOverride() {
    }
    MethodOverride.configuration = function () {
        var app = express();
        app.use(methodOverride("X-HTTP-Method"));
        app.use(methodOverride("X-HTTP-Method-Override"));
        app.use(methodOverride("X-Method-Override"));
        app.use(methodOverride("_method"));

        // Configurar o gerador de log
        app.use(morgan("dev"));

        // Configurar o cors para a api
        /*app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
        });*/
        return app;
    };
    return MethodOverride;
})();

Object.seal(MethodOverride);
module.exports = MethodOverride;
//# sourceMappingURL=MethodOverride.js.map
