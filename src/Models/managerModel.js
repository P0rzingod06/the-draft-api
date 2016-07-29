var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var managerSchema = new Schema({
    firstName: String,
    lastName: String,
    logoUrl: String
});

//TODO: unique constraint for firstName and lastName

managerSchema.methods = {

    create: function () {
        return this.save();
    },

    remove: function() {
        console.log(here);
        return this.remove();
    }

    // update: function (updatedManager) {
    // 	console.log(updatedManager)
    //     return updatedManager.update({firstName:'poop'}, function (err, raw) {
    //     	if(err)console.log(err);
    //         console.log(raw);
    //     }).exec();
    // }
}

managerSchema.statics = {
    list: function (query) {
        return this.find(query).populate('manager').exec();
    },

    listById: function (id) {
        return this.findById(id).populate('manager').exec();
    },

    removeById: function (id) {
        return this.listById(id).then(function(manager){
            console.log(manager);
            var manager = new Manager(manager);
            console.log(typeof manager)
            return manager.remove();
        })
    }
}

module.exports = mongoose.model('Manager', managerSchema);