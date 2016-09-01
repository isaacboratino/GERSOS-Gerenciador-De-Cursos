/// <reference path="../../../typings/tsd.d.ts" />

import mongoose = require('mongoose');
import Constants = require('./../../config/constants/Constants');

class DataAccess {

    static mongooseInstance: any;
    static mongooseConnection: mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect() : mongoose.Connection {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('MongoDB Connected');
        });

        this.mongooseInstance = mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }

}

DataAccess.connect();
export = DataAccess;