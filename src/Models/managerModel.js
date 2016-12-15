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
    }
}

managerSchema.statics = {
    list: function (query) {
        return this.find(query).exec();
    },

    listById: function (id) {
        return this.findById(id, function (err, doc) {
            if(err) return err //not handling error right
            return doc
        })
    },

    updateById: function (updatedManager) {
        return this.findByIdAndUpdate(updatedManager, updatedManager).exec();
    },

    removeById: function (id) {
        return this.findByIdAndRemove(id).exec();
    }
}

module.exports = mongoose.model('Manager', managerSchema);
