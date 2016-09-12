import express = require('express');

import Constants = require('./../../config/constants/Constants');
import IUserModel = require('./../../app/model/interfaces/IUserModel');

var jwt = require('jsonwebtoken');

class TokenUtilities {

    static generateToken(user: IUserModel, res) {        
        if (!user) {
            res.status(500).send('Falha ao autenticar');
        } else if (user) {
            var token = jwt.sign(user, Constants.TOKEN_SECRET_STRING, {expiresIn: '1h'});
            res.status(200).send(token);
        }       
    }

    static validateToken(req, res, next) {

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, Constants.TOKEN_SECRET_STRING, function(err, decoded) {      
                if (err) {
                    return res.json({ success: false, message: 'Falha ao autenticar token.' });    
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;    
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({ 
                success: false, 
                message: 'No token provided.' 
            });
            
        }
    }
}

Object.seal(TokenUtilities);
export = TokenUtilities;