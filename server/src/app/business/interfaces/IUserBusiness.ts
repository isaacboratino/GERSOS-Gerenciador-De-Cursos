import IBusinessBase = require('./base/IBusinessBase');
import IUserModel = require('./../../model/interfaces/IUserModel');

interface IUserBusiness extends IBusinessBase<IUserModel> {

}

export = IUserBusiness;