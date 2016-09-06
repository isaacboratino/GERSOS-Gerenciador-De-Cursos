/// <reference path="../../../typings/tsd.d.ts" />

import IUserBusiness = require('./interfaces/IUserBusiness');
import UserRepository = require('./../repository/UserRepository');
import IUserModel = require('./../model/interfaces/IUserModel');

class AuthenticationBusiness {

    private _repository : UserRepository;

    constructor() {
        this._repository = new UserRepository();
    }

    authenticate (user: string, password: string, callback: (error: any, result: any) => void) {
        this._repository.authenticate(user, password, callback);
    }
}

Object.seal(AuthenticationBusiness);
export = AuthenticationBusiness;