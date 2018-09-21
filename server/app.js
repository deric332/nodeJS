var express     =require('express');
var myfun       = require('./func'); // not identifying the module
var aws         = require('aws-sdk');
var app=express();

var s3 = new aws.S3({region: 'ap-south-1'});
    app.route('/authenticate').get(function (req,res) {
    myfun.doHash();
        var myBucket = 'deric333';
        var myKey = 'myBucketKey';
        s3.createBucket({Bucket: myBucket}, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                params = {Bucket: myBucket, Key: myKey, Body: 'Hello!'};
                s3.putObject(params, function(err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("Successfully uploaded data to myBucket/myKey");
                    }
                });
            }
        });
    res.send("Get Node Router");
});
app.route('/authenticate').post(function (req,res) {
    req.headers
    res.send("Post Node Router");
});

var server = app.listen('3000');
