import DataAccess = require('./../DataAccess');
import ICursoModel = require('./../../model/interfaces/ICursoModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CursoSchema {

    static get schema() {
        var schema = mongoose.Schema({
            nome : {
                type: String,
                required: true
            },
            descricao : {
                type: String,
                required: true
            },
            registroData: {
                type: Date,
                required: true
            },
            registroAcao: {
                type: String,
                required: true
            }
        });
        return schema;
    }

}

var schema = mongooseConnection.model<ICursoModel>('Cursos', CursoSchema.schema);
export = schema;