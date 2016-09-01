import express = require('express');

interface IWriteController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;
}

export = IWriteController;