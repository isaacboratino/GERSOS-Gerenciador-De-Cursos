import methodOverride = require('method-override');
import express = require('express');
import morgan = require('morgan');

class MethodOverride {
    static configuration(): any {
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
    }
}

Object.seal(MethodOverride);
export = MethodOverride;