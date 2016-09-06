var DataAccess = require('./../DataAccess');

var mongooseInstance = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
})();

var schema = mongooseConnection.model('Users', UserSchema.schema);
module.exports = schema;
//# sourceMappingURL=UserSchema.js.map
