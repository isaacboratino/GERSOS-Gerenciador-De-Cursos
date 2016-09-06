import express = require('express');
import IControllerBase = require('./interfaces/base/IControllerBase');
import UserBusiness = require('./../app/business/UserBusiness');
import IUserModel = require('./../app/model/interfaces/IUserModel');

class UserController implements IControllerBase<UserBusiness> {

    create (req: express.Request, res: express.Response): void {
        try {
            var model : IUseModel = <IUseModel>req.body;
            var business : UserBusiness = new UserBusiness();
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
            var model: IUseModel = <IUseModel>req.body;
            var business: UserBusiness = new UserBusiness();

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
            var business: UserBusiness = new UserBusiness();
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

            var business: UserBusiness = new UserBusiness();
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
            
            var business: UserBusiness =  new UserBusiness();
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

export = UserController;