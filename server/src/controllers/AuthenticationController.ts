import express = require('express');

import Constants = require('./../config/constants/Constants');
import IControllerBase = require('./interfaces/base/IControllerBase');
import AuthenticationBusiness = require('./../app/business/AuthenticationBusiness');
import IUserModel = require('./../app/model/interfaces/IUserModel');

var jwt = require('jsonwebtoken');

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
                    console.log(result[0]);
                    var user: IUseModel = result[0];
                    
                    if (!user) {
                        res.status(500).send('Falha ao autenticar');
                    } else if (user) {
                        var token = jwt.sign(user, Constants.TOKEN_SECRET_STRING, {
                            expiresIn: '1h'
                        });
                        res.status(200).send(token);
                    }                    
                }
                    
            });    
        } catch (erro) {
            console.log('error '+erro+' '+req.body.nome);
            res.status(500).send({'error':req.body});
        }
    }
}

export = AuthenticationController;