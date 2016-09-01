import ICursoModel = require('./../model/interfaces/ICursoModel');
import CursoModel = require('./../model/CursoModel');
import CursoSchema = require('./../dataAccess/schemas/CursoSchema');
import RepositoryBase = require('./base/RepositoryBase');

class CursoRepository extends RepositoryBase<ICursoModel> {

    constructor() {
        super(CursoSchema);
    }
}

Object.seal(CursoRepository);
export = CursoRepository;