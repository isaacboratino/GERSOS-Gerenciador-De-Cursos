var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CursoSchema = require('./../dataAccess/schemas/CursoSchema');
var RepositoryBase = require('./base/RepositoryBase');

var CursoRepository = (function (_super) {
    __extends(CursoRepository, _super);
    function CursoRepository() {
        _super.call(this, CursoSchema);
    }
    return CursoRepository;
})(RepositoryBase);

Object.seal(CursoRepository);
module.exports = CursoRepository;
//# sourceMappingURL=CursoRepository.js.map
