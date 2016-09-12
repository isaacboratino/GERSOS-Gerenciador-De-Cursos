import express = require('express');

import IControllerBase = require('./interfaces/base/IControllerBase');
import AuthenticationBusiness = require('./../app/business/AuthenticationBusiness');
import IUserModel = require('./../app/model/interfaces/IUserModel');

import TokenUtilities = require('./../config/middlewares/TokenUtilities');

class AuthenticationController implements IControllerBase<AuthenticationBusiness> {

    authenticate (req: express.Request, res: express.Response): void {
        try {
            var model : IUseModel = <IUseModel>req.body;
            console.log(model);
            var business : AuthenticationBusiness = new AuthenticationBusiness();
            business.authenticate(model.user, model.password, (error, result) => {
                if (error) 
                    res.status(500).send({'error':error});
                else {
                    TokenUtilities.generateToken(result[0], res);    
                }
                    
            });    
        } catch (erro) {
            console.log('error '+erro+' '+req.body.nome);
            res.status(500).send({'error':req.body});
        }
    }
}

export = AuthenticationController;