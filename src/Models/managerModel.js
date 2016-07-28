var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var managerSchema = new Schema({
    firstName: String,
    lastName: String
});

managerSchema.methods = {

    list: function (query) {
        return this.find(query).populate('manager').exec();
    },

    create: function (manager) {
    	return manager.save();
    }
}

module.exports = mongoose.model('Manager', managerSchema);