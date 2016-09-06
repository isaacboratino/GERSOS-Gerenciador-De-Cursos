var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RepositoryBase = require('./base/RepositoryBase');

var UserSchema = require('./../dataAccess/schemas/UserSchema');

var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        _super.call(this, UserSchema);
    }
    UserRepository.prototype.authenticate = function (user, password, callback) {
        this._model.find({ user: user, password: password }, callback);
    };
    return UserRepository;
})(RepositoryBase);

Object.seal(UserRepository);
module.exports = UserRepository;
//# sourceMappingURL=UserRepository.js.map
