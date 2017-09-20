var mongoose = require('mongoose');
var Author = require('./models/authorModel.js');
var Book = require('./models/bookModel.js');

// Koppla upp mot en databas
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/library', {
    useMongoClient: true
});

var author = new Author({
    "name.first": 'Johannes',
    "name.last": 'Anyuru'
})

author.save(function(err) {
    if (err)
        console.log(err)
    
    var book1 = new Book({
        title: 'De kommer att drunkna i sina mödrars tårar',
        year: 2017,
        author: author._id
    })

    book1.save(function(err){
        if (err)
            console.log(err)    
    })

    var book2 = new Book({
        title: 'En storm kom från paradiset',
        year: 2012,
        author: author._id
    })

    book2.save(function(err){
        if (err)
            console.log(err)    
    })
})