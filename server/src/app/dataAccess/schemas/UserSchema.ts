import DataAccess = require('./../DataAccess');
import IUserModel = require('./../../model/interfaces/IUserModel');

var mongooseInstance = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        var schema = mongooseInstance.Schema({
            user: {
                type: String,
                required: true
            },
            password: {
                type: String,
                require: true
            }
        });
        return schema;
    }

}

var schema = mongooseConnection.model<IUserModel>('Users', UserSchema.schema);
export = schema;