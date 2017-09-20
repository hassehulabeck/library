var mongoose = require('mongoose')
var Schema = mongoose.Schema

var bookSchema = new Schema({
    title: String,
    year: Number,
    author: { type: Schema.Types.ObjectId, ref: 'Author'}
})

module.exports = mongoose.model('Book', bookSchema);