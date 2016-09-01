import ICursoModel = require('./interfaces/ICursoModel');

class CursoModel {

    private _model : ICursoModel;

    constructor(model: ICursoModel) {
        this._model = model;
    }

    get nome() : string {
        return this._model.nome
    }

    get descricao() : string {
        return this._model.descricao;
    }

    get registroData() : Date {
        return this._model.registroData;
    }
}

Object.seal(CursoModel);
export = CursoModel;