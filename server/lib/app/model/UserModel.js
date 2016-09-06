var UserModel = (function () {
    function UserModel(model) {
        this._model = model;
    }
    Object.defineProperty(UserModel.prototype, "user", {
        get: function () {
            return this._model.user;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(UserModel.prototype, "password", {
        get: function () {
            return this._model.password;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
})();

Object.seal(UserModel);
module.exports = UserModel;
//# sourceMappingURL=UserModel.js.map
