"use strict";
exports.__esModule = true;
var Express = require("express");
var app = Express();
app.get('/', function (req, res) {
    res.send('test');
});
app.listen(3000, function (err) {
    console.log('Running...');
});
