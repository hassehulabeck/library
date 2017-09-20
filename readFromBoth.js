var mongoose = require('mongoose');
var Book = require('./models/bookModel.js');
var Author = require('./models/authorModel.js');

// Koppla upp mot en databas
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/library', {
    useMongoClient: true
});

var foundAuthor;

// Hitta författaren till boken.
Book
    .findOne({
        title: 'De kommer att drunkna i sina mödrars tårar'
    })
    .populate('author')
    .exec(function (err, book) {
        if (err)
            console.log(err)
        console.log('Författaren heter ' + book.author.name.first + ' ' + book.author.name.last)
    
        // Hitta författarens alla böcker
        Book
            .find({
                author: book.author._id
            })
            .exec(function (err, books) {
                if (err)
                    console.log(err)
                console.log ("Boklista")
                books.forEach(function(bok) {
                    console.log(bok.title)                   
                })
            })
    })

