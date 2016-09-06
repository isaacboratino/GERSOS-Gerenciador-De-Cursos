import express = require('express');

import CursoRoutes = require('./../CursoRoutes');
import UserRoutes = require('./../UserRoutes');
import AuthenticationRoutes = require('./../AuthenticationRoutes');

var app = express();

class RoutesBase {

    get routes() {        
        app.use('/', new CursoRoutes().routes);
        app.use('/', new UserRoutes().routes);
        app.use('/', new AuthenticationRoutes().routes);
        return app;
    }
}

export = RoutesBase;