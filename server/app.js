var express     =require('express');
var myfun       = require('./func'); // not identifying the module
var aws         = require(''aws-sdk);
var app=express();


app.route('/authenticate').get(function (req,res) {
    myfun.doHash();
    res.send("Get Node Router");
});
app.route('/authenticate').post(function (req,res) {
    req.headers
    res.send("Post Node Router");
});

var server = app.listen('3000');
