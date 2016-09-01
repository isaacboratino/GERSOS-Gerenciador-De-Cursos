/// <reference path="../../../../typings/tsd.d.ts" />
var mongoose = require('mongoose');

var RepositoryBase = (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RepositoryBase.prototype.create = function (item, callback) {
        this._model.create(item, callback);
    };

    RepositoryBase.prototype.update = function (id, item, callback) {
        this._model.update({ _id: id }, item, callback);
    };

    RepositoryBase.prototype.delete = function (id, callback) {
        this._model.remove({ _id: this.toObjectId(id) }, function (err) {
            return callback(err, null);
        });
    };

    RepositoryBase.prototype.retrieve = function (orderBy, limit, skip, callback) {
        this._model.find({}, {}, { sort: this.toSort(orderBy), limit: limit, skip: skip }, callback);
    };

    RepositoryBase.prototype.findById = function (id, callback) {
        this._model.findById(id, callback);
    };

    RepositoryBase.prototype.toObjectId = function (id) {
        return mongoose.Types.ObjectId.createFromHexString(id);
    };

    RepositoryBase.prototype.toSort = function (orderBy) {
        if (orderBy != '') {
            var sort = {};
            sort[orderBy] = 1;
            return sort;
        }
    };
    return RepositoryBase;
})();

module.exports = RepositoryBase;
//# sourceMappingURL=RepositoryBase.js.map
