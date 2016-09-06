/// <reference path="../../../typings/tsd.d.ts" />
var UserRepository = require('./../repository/UserRepository');

var UserBusiness = (function () {
    function UserBusiness() {
        this._repository = new UserRepository();
    }
    UserBusiness.prototype.retrieve = function (orderBy, limit, skip, callback) {
        this._repository.retrieve(orderBy, limit, skip, callback);
    };

    UserBusiness.prototype.findById = function (id, callback) {
        this._repository.findById(id, callback);
    };

    UserBusiness.prototype.create = function (item, callback) {
        this._repository.create(item, callback);
    };

    UserBusiness.prototype.update = function (id, item, callback) {
        var _this = this;
        this._repository.findById(id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._repository.update(res.id, item, callback);
        });
    };

    UserBusiness.prototype.delete = function (id, callback) {
        this._repository.delete(id, callback);
    };
    return UserBusiness;
})();

Object.seal(UserBusiness);
module.exports = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map
