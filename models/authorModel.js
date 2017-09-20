var mongoose = require('mongoose')
var Schema = mongoose.Schema

var authorSchema = new Schema({
    name: {
        first: String,
        last: String
    }
});

module.exports = mongoose.model('Author', authorSchema)