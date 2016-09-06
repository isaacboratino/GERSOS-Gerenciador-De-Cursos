/// <reference path="../../../../typings/tsd.d.ts" />

import IRead = require('./../interfaces/IRead');
import IWrite = require('./../interfaces/IWrite');

import mongoose = require('mongoose');

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {
    
    public _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    update (id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({_id: id}, item, callback);
    }

    delete (id: string, callback: (error: any, result: any) => void) {
        this._model.remove({_id: this.toObjectId(id)}, (err) => callback(err, null));
    }

    retrieve (orderBy: string, limit: number, skip: number, callback: (error: any, result: any) => void) {   
        this._model.find({}, {}, {sort: this.toSort(orderBy), limit: limit, skip: skip}, callback);
    }

    findById (id: string, callback: (error: any, result: any) => void) {
        this._model.findById(id, callback);
    }

    private toObjectId(id: string) : mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(id);
    }

    private toSort(orderBy: string): any {
        if (orderBy != '') {
            var sort = {};
            sort[orderBy] = 1;
            return sort;
        }
    }
}

export = RepositoryBase;