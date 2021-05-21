var mongoose = require('mongoose');

var Schema = mongoose.Schema

var BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    publishedDate: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String,
    },
    link: {
        type: String,
        required: 'URL can\'t be empty',
    }
})

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;