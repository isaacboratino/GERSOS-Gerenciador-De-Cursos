/// <reference path="../typings/tsd.d.ts" />
var express = require('express');

var MiddlewareBase = require('./config/middlewares/base/MiddlewareBase');

var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.use(MiddlewareBase.configuration);

app.listen(port, function () {
    console.log("Node app is running at localhost:" + port);
});
//# sourceMappingURL=server.js.map
