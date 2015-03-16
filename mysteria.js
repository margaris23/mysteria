var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var Game = require('./game/dice.js');

function dump(obj) {
    return JSON.stringify(obj, undefined, 4);
}

function normalizeUrl(url) {
    if (url && url.indexOf('http') !== 0) {
        return HTTP_PREFIX + url;
    }
    return url;
}

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendStatus(404);
});

app.get('/constants', function (req, res) {
    res.send({
			MAX_PLAYERS: null
		});
});

app.get('/roll', function (req, res) {
    res.send({
			roll: Game.DIE.roll(1,2)
		});
});


app.listen(process.argv[2] || 9000);
