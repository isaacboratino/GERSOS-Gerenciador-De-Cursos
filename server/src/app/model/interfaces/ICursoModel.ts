/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require('mongoose');

interface ICursoModel extends mongoose.Document {
    nome : string;
    descricao : string;
    registroData: Date;
    registroAcao: string;
}

export = ICursoModel;