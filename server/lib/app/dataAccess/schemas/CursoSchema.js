var DataAccess = require('./../DataAccess');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var CursoSchema = (function () {
    function CursoSchema() {
    }
    Object.defineProperty(CursoSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                nome: {
                    type: String,
                    required: true
                },
                descricao: {
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
        },
        enumerable: true,
        configurable: true
    });
    return CursoSchema;
})();

var schema = mongooseConnection.model('Cursos', CursoSchema.schema);
module.exports = schema;
//# sourceMappingURL=CursoSchema.js.map
