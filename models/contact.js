'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    lastName: String,
    email: String,
    subject: String,
    message: String
});

module.exports = mongoose.model('Contact', ProjectSchema);
// Contacts --> guarda los documents en la coleccion