import IRead = require('./../common/IRead');
import IWrite = require('./../common/IWrite');

interface IBusinessBase<T> extends IRead<T>, IWrite<T> {

}

export = IBusinessBase;