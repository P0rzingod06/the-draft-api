var Manager = require('./../Models/managerModel');

exports.list = function (req, res) {
    console.log(Manager.find())
    Manager.find({}, function (err, Manager) {
        if (err) return console.error(err);
        console.log(Manager);
        res.json(Manager);
    })
}

exports.create = function (req, res) {
    try {
        var newManager = new Manager(req.body);
        newManager.save();
        res.json(newManager);
    } catch (err) {
        res.json(err);
    }
}