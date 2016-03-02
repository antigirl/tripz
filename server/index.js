var express = require('express');
var app = express();
var request = require('request');
var config  = require('./config.js');
var cache = {};

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
        'latitude': req.params.lat,
        'longitude': req.params.long,
        'radius': req.params.radius || 100
    };

    var cacheKey = '' + qs.latitude + qs.longitude;

    if (cache[cacheKey]) {
        return res.json(JSON.parse(cache[cacheKey]));
    }

    request({url: endpoint, qs:qs}, function (err, resp, body) {
        if (!err && resp.statusCode === 200) {
            cache[cacheKey] = body;
            res.json(JSON.parse(body));
        } else {
            res.json('error getting api data ', err)
        }
    });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
