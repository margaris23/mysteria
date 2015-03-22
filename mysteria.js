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

function sendDefault(res) {
    res.send({
			result: 'NO_RESULT'
    });
}

app.use(express.static(process.argv[3] ||
				path.join(__dirname, 'public')));

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
        roll: Game.DIE.getInstance().roll(1, 6)
    });
});

app.get('/case', function (req, res) {
    sendDefault(res);
});

app.get('/suspect', function (req, res) {
    sendDefault(res);
});

app.get('/wizard', function (req, res) {
    sendDefault(res);
});

app.get('/spy', function (req, res) {
    sendDefault(res);
});

app.get('/witness', function (req, res) {
    sendDefault(res);
});


app.listen(process.argv[2] || 9000);
