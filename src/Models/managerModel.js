var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var managerSchema = new Schema({
    firstName: String,
    lastName: String
});

//TODO: unique constraint for firstName and lastName

managerSchema.methods = {

    list: function (query) {
        return this.find(query).populate('manager').exec();
    },

    findById: function (id) {
    	return this.findOne(id).populate('manager').exec();
    },

    create: function (manager) {
    	return manager.save();
    }
}

module.exports = mongoose.model('Manager', managerSchema);