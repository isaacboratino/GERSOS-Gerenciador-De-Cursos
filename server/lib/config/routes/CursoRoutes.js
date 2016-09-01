var express = require('express');
var CursoController = require('./../../controllers/CursoController');

var router = express.Router();
var CursoRoutes = (function () {
    function CursoRoutes() {
        this._controller = new CursoController();
    }
    Object.defineProperty(CursoRoutes.prototype, "routes", {
        get: function () {
            var controller = this._controller;
            router.post('/cursos', controller.create);
            router.get('/cursos', controller.retrieve);
            router.get('/cursos/:orderby', controller.retrieve);
            router.get('/cursos/:limit/:skip', controller.retrieve);
            router.get('/cursos/:orderby/:limit/:skip', controller.retrieve);
            router.put('/cursos/:id', controller.update);
            router.delete('/cursos/:id', controller.delete);
            router.get('/cursos/:id', controller.findById);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return CursoRoutes;
})();

Object.seal(CursoRoutes);
module.exports = CursoRoutes;
//# sourceMappingURL=CursoRoutes.js.map
