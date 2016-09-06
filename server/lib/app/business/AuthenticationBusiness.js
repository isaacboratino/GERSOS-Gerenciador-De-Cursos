/// <reference path="../../../typings/tsd.d.ts" />
var UserRepository = require('./../repository/UserRepository');

var AuthenticationBusiness = (function () {
    function AuthenticationBusiness() {
        this._repository = new UserRepository();
    }
    AuthenticationBusiness.prototype.authenticate = function (user, password, callback) {
        this._repository.authenticate(user, password, callback);
    };
    return AuthenticationBusiness;
})();

Object.seal(AuthenticationBusiness);
module.exports = AuthenticationBusiness;
//# sourceMappingURL=AuthenticationBusiness.js.map
