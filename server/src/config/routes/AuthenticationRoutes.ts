import express = require('express');
import AuthenticationController = require('./../../controllers/AuthenticationController');

var router = express.Router();
class AuthenticationRoutes {

    private _controller: AuthenticationController;

    constructor() {
        this._controller = new AuthenticationController();
    }

    get routes(): express.Router {
        var controller = this._controller;
        router.post('/auth',controller.authenticate);
        return router;
    }
}

Object.seal(AuthenticationRoutes);
export = AuthenticationRoutes;