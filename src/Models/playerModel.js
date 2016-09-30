var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    firstName: String,
    lastName: String,
    manager: String
});

//TODO: unique constraint for firstName and lastName

playerSchema.methods = {

    create: function () {
        return this.save();
    }
};

playerSchema.statics = {
    list: function (query) {
        return this.find(query).populate('player').exec();
    },

    listById: function (id) {
        return this.findOne(id).populate('player').exec();
    }
};

module.exports = mongoose.model('Player', playerSchema);