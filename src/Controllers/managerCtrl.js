var Manager = require('./../Models/managerModel');

exports.list = function (req, res) {
    var query = req.query;
    Manager.list(query).then(function (result) {
        res.json(result);
    });
}

exports.listById = function (req, res) {
    var id = req.params.id;
    Manager.listById(id).then(function(response) {
        res.json(response);
    });
}

exports.create = function (req, res) {
    var newManager = new Manager(req.body);
    newManager.create().then(function (newManager) {
        res.json(newManager);
    });
}

exports.update = function (req,res) {
	Manager.updateById(req.body).then(function (updatedManager) {
		res.json(updatedManager);
	});
}

exports.remove = function(req, res) {
    Manager.removeById(req.params.id).then(function (removedManager) {
        res.json(removedManager);
    })
}

function oneError() {
    //TODO: Error Handling
    console.log('THIS IS OUR ERROR HANDLER COME BACK' + ' Boobs lol');
}
