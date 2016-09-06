import RepositoryBase = require('./base/RepositoryBase');
import IUserModel = require('./../model/interfaces/IUserModel');
import UserSchema = require('./../dataAccess/schemas/UserSchema');

class UserRepository extends RepositoryBase<IUserModel> {

    constructor() {
        super(UserSchema);
    }

    authenticate (user: string, password: string, callback: (error: any, result: any) => void) {   
        this._model.find({user: user, password: password}, callback);
    }
}

Object.seal(UserRepository);
export = UserRepository;