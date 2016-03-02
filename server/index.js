var express = require('express');
var app = express();
var request = require('request');
var config  = require('./config.js');


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/api/skiddle/events/:lat?/:long?/:radius?', function (req, res) {
    var endpoint = config.skiddle.endpoint + '/events/';
    var qs = {
        'api_key': config.skiddle.apikey,
        'latitude': req.param.lat || 53.4667,
        'longitude': req.param.long || -2.2333,
        'radius': req.param.radius || 100
    };

    request({url: endpoint, qs:qs}, function (err, resp, body) {
        if (!err && resp.statusCode === 200) {
            res.json(JSON.parse(body));
        } else {
            res.json('error getting api data ', err)
        }
    });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
