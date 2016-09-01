/// <reference path="../typings/tsd.d.ts" />

import express = require('express');

import MiddlewareBase = require('./config/middlewares/base/MiddlewareBase');

var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.use(MiddlewareBase.configuration);
    
app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);     
});