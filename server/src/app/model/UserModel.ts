import IUserModel = require('./interfaces/IUserModel');

class UserModel {

    private _model : IUserModel;

    constructor(model : IUserModel) {
        this._model = model;
    }

    get user() : string {
        return this._model.user   
    }

    get password() : string {
        return this._model.password
    }
}

Object.seal(UserModel);
export = UserModel;