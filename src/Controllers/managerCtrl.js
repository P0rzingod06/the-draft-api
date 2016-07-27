var Manager = require('./../Models/managerModel');

exports.list = function (req,res) {
	console.log(Manager.find())
    Manager.find({},function(err,Manager) {
    	if(err)return console.error(err);
        console.log(Manager);
        res.json(Manager);
    })
}

// exports.save = function (req,res) {
// 	console.log(req);
// 	var newManager = new managerModel;

// 	Manager.save(function(err,Manager){
// 		console.log('post')
// 		res.json(Manager);
// 	})
// }