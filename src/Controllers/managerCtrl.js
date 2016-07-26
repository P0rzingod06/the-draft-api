var Manager = require('./../Models/managerModel');

exports.list = function (req,res) {
    Manager.find({}, function(err,results) {
        console.log(results);
        res.json(results);
    })
}