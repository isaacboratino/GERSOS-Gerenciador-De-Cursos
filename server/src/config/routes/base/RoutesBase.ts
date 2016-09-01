import express = require('express');

import CursoRoutes = require('./../CursoRoutes');

var app = express();
class RoutesBase {

    get routes() {
        app.use('/', new CursoRoutes().routes);
        return app;
    }

}

export = RoutesBase;