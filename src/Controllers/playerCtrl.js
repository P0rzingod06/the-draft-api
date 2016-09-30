/**
 * Created by grahaman on 9/30/16.
 */
var Player = require('./../Models/playerModel');

exports.list = function (req, res) {
    var query = req.query;
    Player.list(query).then(function (result) {
        res.json(result);
    });
}

exports.listById = function (req, res) {
    var id = req.params.id;
    Player.listById(id).then(function(response) {
        res.json(response);
    });
}

exports.create = function (req, res) {
    var newPlayer = new Player(req.body);
    console.log(req.body);
    newPlayer.create().then(function (newPlayer) {
        res.json(newPlayer);
    });
}

exports.remove = function(req, res) {
    var poorPlayer = new Player(req.body);
    console.log('calling findByIdAndRemove')
    Player.findByIdAndRemove(poorPlayer).then(function (removedPlayer) {
        console.log('removedPlayer',removedPlayer)
        res.json(removedPlayer);
    })
}

exports.update = function (req,res) {
    var updatedPlayer = new Player(req.body);
    Player.updateById(updatedPlayer).then(function (updatedPlayer) {
        res.json(updatedPlayer);
    });
}

function oneError() {
    //TODO: Error Handling
    console.log('THIS IS OUR ERROR HANDLER COME BACK' + ' Boobs lol PLAYERS');
}