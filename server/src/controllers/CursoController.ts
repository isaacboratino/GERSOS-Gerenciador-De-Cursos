import express = require('express'); 
import IControllerBase = require('./interfaces/base/IControllerBase');
import CursoBusiness = require('./../app/business/CursoBusiness');
import ICursoModel = require('./../app/model/interfaces/ICursoModel')

class CursoController implements IControllerBase<CursoBusiness> {

    create (req: express.Request, res: express.Response): void {
        try {
            var model : ICursoModel = <ICursoModel>req.body;
            var business : CursoBusiness = new CursoBusiness();
            business.create(model, (error, result) => {
                if (error) 
                    res.status(500).send({'error':error});
                else 
                    res.status(200).send({'success':'Success'});
            });    
        } catch (erro) {
            console.log('error '+erro+' '+req.body.nome);
            res.status(500).send({'error':req.body});
        }
    }

    update (req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params.id;            
            var model: ICursoModel = <ICursoModel>req.body;
            var business: CursoBusiness = new CursoBusiness();

            business.update(id, model, (error, result) => {
                if (error) 
                    res.status(500).send({'error':error});
                else 
                    res.status(200).send({'Success':'Suceess'});
            });
        } catch (error) {
            console.log('error ${error}');
            res.status(500).send({'error':error});
        }
    }

    delete (req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params.id;
            var business: CursoBusiness = new CursoBusiness();
            business.delete(id, (error, result) => {
                if (error)
                    res.status(500).send({'error':error});
                else
                    res.status(200).send({'Success': 'deletado com sucesso'})
            });
        } catch (error) {
            console.log('error ${error}');
            res.status(500).send({'error':error});            
        }
    }

    retrieve (req: express.Request, res: express.Response): void {
        try {

            var orderBy: string = '';
            if (req.params.orderby) {
                orderBy = req.params.orderby;
            }                

            var limit: number = 0;
            if (req.params.limit) {
                limit = Number(req.params.limit);
            } 

            var skip: number = 0;
            if (req.params.skip) {
                skip = Number(req.params.skip);
            } 

            var business: CursoBusiness = new CursoBusiness();
            business.retrieve(orderBy, limit, skip, (error, result) => {
                if (error)
                    res.status(500).send({'error': error});
                else
                    res.status(200).send(result);
            });
        } catch (error) {
            console.log('error '+error+' stack '+error.stack);
            res.status(500).send({'error':error}); 
        }
    }

    findById (req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params.id;
            
            var business: CursoBusiness =  new CursoBusiness();
            business.findById(id, (error, result) => {
                if (error) 
                    res.status(500).send({'error': error});
                else
                    res.status(200).send(result);
            });
        } catch (error) {
            console.log('error ${error}');
            res.status(500).send({'error':error});
        }
    }
}

export = CursoController;