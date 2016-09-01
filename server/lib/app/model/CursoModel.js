var CursoModel = (function () {
    function CursoModel(model) {
        this._model = model;
    }
    Object.defineProperty(CursoModel.prototype, "nome", {
        get: function () {
            return this._model.nome;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(CursoModel.prototype, "descricao", {
        get: function () {
            return this._model.descricao;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(CursoModel.prototype, "registroData", {
        get: function () {
            return this._model.registroData;
        },
        enumerable: true,
        configurable: true
    });
    return CursoModel;
})();

Object.seal(CursoModel);
module.exports = CursoModel;
//# sourceMappingURL=CursoModel.js.map
