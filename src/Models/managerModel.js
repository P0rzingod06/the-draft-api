var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var managerSchema = new Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('manager', managerSchema, 'managers');