var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var managerSchema = new Schema({
    firstName: String,
    lastName: String
});

//TODO: unique constraint for firstName and lastName

managerSchema.methods = {

    create: function (manager) {
    	return manager.save();
    }
};

managerSchema.statics = {

    list: function (query) {
        return this.find(query).populate('manager').exec();
    },

    listById: function (id) {
    	return this.findOne(id).populate('manager').exec();
    }
};

module.exports = mongoose.model('Manager', managerSchema);