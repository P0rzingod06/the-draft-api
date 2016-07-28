var Manager = require('./../Models/managerModel');

exports.list = function (req, res) {
    query = req.query;
    Manager.list(query).then(function (result) {
        res.json(result);
    });
}

exports.listById = function (req, res) {
    id = req.params.id
    Manager.listById(id).then(function (result) {
        res.json(result);
    });
}

exports.create = function (req, res) {
    var newManager = new Manager(req.body);
    Manager.create(newManager).then(function (newManager) {
        res.json(newManager);
    })
}

function oneError() {
    //TODO: Error Handling
    console.log('THIS IS OUR ERROR HANDLER COME BACK' + ' Boobs lol');
}