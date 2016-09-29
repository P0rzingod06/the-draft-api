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
    console.log(req.body);
    newManager.create().then(function (newManager) {
        res.json(newManager);
    });
}

exports.remove = function(req, res) {
    var poorManager = new Manager(req.body);
    console.log('calling findByIdAndRemove')
    Manager.findByIdAndRemove(poorManager).then(function (removedManager) {
        console.log('removedManager',removedManager)
        res.json(removedManager);
    })
}

exports.update = function (req,res) {
	var updatedManager = new Manager(req.body);
	Manager.updateById(updatedManager).then(function (updatedManager) {
		res.json(updatedManager);
	});
}

function oneError() {
    //TODO: Error Handling
    console.log('THIS IS OUR ERROR HANDLER COME BACK' + ' Boobs lol');
}