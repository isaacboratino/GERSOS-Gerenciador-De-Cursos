/// <reference path="../../../typings/tsd.d.ts" />
var CursoRepository = require('./../repository/CursoRepository');

var CursoBusiness = (function () {
    function CursoBusiness() {
        this._repository = new CursoRepository();
    }
    CursoBusiness.prototype.retrieve = function (orderBy, limit, skip, callback) {
        this._repository.retrieve(orderBy, limit, skip, callback);
    };

    CursoBusiness.prototype.findById = function (id, callback) {
        this._repository.findById(id, callback);
    };

    CursoBusiness.prototype.create = function (item, callback) {
        this._repository.create(item, callback);
    };

    CursoBusiness.prototype.update = function (id, item, callback) {
        var _this = this;
        console.log('item ' + item.nome);
        this._repository.findById(id, function (err, res) {
            if (err)
                callback(err, res);
            else
                console.log('item ' + item.nome + ' ' + res.nome);
            _this._repository.update(res.id, item, callback);
        });
    };

    CursoBusiness.prototype.delete = function (id, callback) {
        this._repository.delete(id, callback);
    };
    return CursoBusiness;
})();

Object.seal(CursoBusiness);
module.exports = CursoBusiness;
//# sourceMappingURL=CursoBusiness.js.map
