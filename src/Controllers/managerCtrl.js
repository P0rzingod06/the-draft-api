var Manager = require('./../Models/managerModel');

exports.list = function (req, res) {
    var query = req.query;
    Manager.list(query).then(function (result) {
        res.json(result);
    });
}

exports.listById = function (req, res) {
    var id = req.params.id
    Manager.listById(id).then(function (result) {
        res.json(result);
    });
}

exports.create = function (req, res) {
    var newManager = new Manager(req.body);
    newManager.create().then(function (newManager) {
        res.json(newManager);
    });
}

exports.remove = function(req, res) {
    var poorManagerId = req.params.id;
    Manager.removeById(poorManagerId).then(function (removedManager) {
        console.log(removedManager)
        res.json(removedManager);
    })

}

// exports.update = function (req,res) {
// 	var updatedManager = new Manager(req.body);
// 	console.log(updatedManager);
// 	updatedManager.update(updatedManager).then(function (updatedManager) {
// 		res.json(updatedManager);
// 	});
// }

function oneError() {
    //TODO: Error Handling
    console.log('THIS IS OUR ERROR HANDLER COME BACK' + ' Boobs lol');
}