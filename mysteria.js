/** @module mysteria */

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

/**
 * @description Sends default result
 *
 * @param {Object} res - The response object
 */
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

/**
 * @function API_StartGame
 * @global
 * @description Starts a game (POST)
 * @param {string} gameId - Game Id.
 * @returns {Player|Array} players - Players participating in the game.
 * @example
 * // returns players array json object
 * POST /game/start HTTP/1.1
 * From: reverence23@gmail.com
 * User-Agent: HTTPTool/1.1
 * Content-Type: application/x-www-form-urlencoded
 * Content-Length: 32
 * game=1
 */
app.post('/game/start', function (req, res) {

});

/**
 * @function API_CreateGame
 * @global
 * @description Creates a game (POST)
 * @param {integer} players - Number of players.
 * @returns {string} gameId - Game Id.
 * @example
 * // returns a gameId
 * POST /game HTTP/1.1
 * From: reverence23@gmail.com
 * User-Agent: HTTPTool/1.1
 * Content-Type: application/x-www-form-urlencoded
 * Content-Length: 32
 * players=5
 */
app.post('/game', function (req, res) {
    sendDefault(res);
});

/**
 * @function API_GetCases
 * @global
 * @description Get available cases (GET)
 * @returns {Case|Array} cases - Candidate cases for a game.
 * @example
 * // returns Case array json object
 * GET /cases HTTP/1.1
 */
app.get('/cases', function (req, res) {
    sendDefault(res);
});

/**
 * @function API_ChooseCase
 * @global
 * @description Chooses a case for a game (POST)
 * @param {string} caseId - Id of the case to choose.
 * @param {string} gameId - Id of the game.
 * @returns {integer} HTTP_Status_Code - 200.
 * @example
 * // returns a gameId
 * POST /case HTTP/1.1
 * From: reverence23@gmail.com
 * User-Agent: HTTPTool/1.1
 * Content-Type: application/x-www-form-urlencoded
 * Content-Length: 32
 * case=2&game=1
 */
app.post('/case', function (req, res) {
    res.sendStatus(200);
});

app.listen(process.argv[2] || 9000);
