import IReadController = require('./../common/IReadController');
import IWriteController = require('./../common/IWriteController');
import IBusinessBase = require('./../../../app/business/interfaces/base/IBusinessBase');

interface IControllerBase<T extends IBusinessBase<Object>> extends IReadController, IWriteController {

}

export = IControllerBase;