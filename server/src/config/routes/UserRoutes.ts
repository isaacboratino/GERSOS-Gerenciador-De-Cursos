import express = require('express');
import UserController = require('./../../controllers/UserController');
import ValidationToken = require('./../middlewares/ValidationToken');

var router = express.Router();
class UserRoutes {

    private _controller: UserController;

    constructor() {
        this._controller = new UserController();
    }

    get routes(): express.Router {
        var controller = this._controller;
        //router.use(ValidationToken.validate);
        router.post('/users', controller.create);
        router.get('/users', ValidationToken.validate, controller.retrieve);
        router.get('/users/:orderby',controller.retrieve);
        router.get('/users/:limit/:skip',controller.retrieve);
        router.get('/users/:orderby/:limit/:skip',controller.retrieve);
        router.put('/users/:id',controller.update);
        router.delete('/users/:id',controller.delete);
        router.get('/users/:id',controller.findById);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;