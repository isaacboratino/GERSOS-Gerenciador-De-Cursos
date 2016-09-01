import express = require('express');
import CursoController = require('./../../controllers/CursoController');

var router = express.Router();
class CursoRoutes {

    private _controller: CursoController;

    constructor() {
        this._controller = new CursoController();
    }

    get routes(): express.Router {
        var controller = this._controller;
        router.post('/cursos',controller.create);
        router.get('/cursos',controller.retrieve);
        router.get('/cursos/:orderby',controller.retrieve);
        router.get('/cursos/:limit/:skip',controller.retrieve);
        router.get('/cursos/:orderby/:limit/:skip',controller.retrieve);
        router.put('/cursos/:id',controller.update);
        router.delete('/cursos/:id',controller.delete);
        router.get('/cursos/:id',controller.findById);
        return router;
    }
}

Object.seal(CursoRoutes);
export = CursoRoutes;