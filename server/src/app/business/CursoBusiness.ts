/// <reference path="../../../typings/tsd.d.ts" />

import ICursoBusiness = require('./interfaces/ICursoBusiness');
import CursoRepository = require('./../repository/CursoRepository');
import ICursoModel = require('./../model/interfaces/ICursoModel');

class CursoBusiness implements ICursoBusiness {

    private _repository : CursoRepository;

    constructor() {
        this._repository = new CursoRepository();
    }

    retrieve (orderBy: string, limit: number, skip: number, callback: (error: any, result: any) => void) {
        this._repository.retrieve(orderBy, limit, skip, callback);
    }

    findById (id: string, callback: (error: any, result: any) => void) {
        this._repository.findById(id, callback);
    }

    create (item: ICursoModel, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    update (id: string, item: ICursoModel, callback: (error: any, result: any) => void) {
        console.log('item '+item.nome);
        this._repository.findById(id, (err, res) => {
            if 
                (err) callback(err, res);            
            else 
                console.log('item '+item.nome+' '+res.nome);
                this._repository.update(res.id, item, callback);               
        }); 
    }

    delete (id: string, callback: (error: any, result: any) => void) {
        this._repository.delete(id, callback);
    }

}

Object.seal(CursoBusiness);
export = CursoBusiness;