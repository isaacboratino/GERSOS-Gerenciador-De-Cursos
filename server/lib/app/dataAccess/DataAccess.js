/// <reference path="../../../typings/tsd.d.ts" />
var mongoose = require('mongoose');
var Constants = require('./../../config/constants/Constants');

var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;

        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once('open', function () {
            console.log('MongoDB Connected');
        });

        this.mongooseInstance = mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return DataAccess;
})();

DataAccess.connect();
module.exports = DataAccess;
//# sourceMappingURL=DataAccess.js.map
