/// <reference path="../../../typings/tsd.d.ts" />

import IUserBusiness = require('./interfaces/IUserBusiness');
import UserRepository = require('./../repository/UserRepository');
import IUserModel = require('./../model/interfaces/IUserModel');

class UserBusiness implements IUserBusiness {

    private _repository : UserRepository;

    constructor() {
        this._repository = new UserRepository();
    }

    retrieve (orderBy: string, limit: number, skip: number, callback: (error: any, result: any) => void) {
        this._repository.retrieve(orderBy, limit, skip, callback);
    }

    findById (id: string, callback: (error: any, result: any) => void) {
        this._repository.findById(id, callback);
    }

    create (item: IUserModel, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    update (id: string, item: IUserModel, callback: (error: any, result: any) => void) {
        this._repository.findById(id, (err, res) => {
            if 
                (err) callback(err, res);            
            else 
                this._repository.update(res.id, item, callback);               
        }); 
    } 

    delete (id: string, callback: (error: any, result: any) => void) {
        this._repository.delete(id, callback);
    }

}

Object.seal(UserBusiness);
export = UserBusiness;