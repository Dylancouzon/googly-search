import axios from "axios";

export default {
    // Get book based on search
    getBooks: function(book) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
       
    },
    // Get list of saved books in database
    getSavedBooks: function() {
        return axios.get('/api/books')
    },
    // Save book to database
    saveBook: function(bookData) {
        return axios.post('/api/books', bookData)
        // Mongoose
    },
    // Delete book from database
    deleteBook: function(bookId) {
        return axios.delete('/api/books' + bookId)
        //Mongoose 
    },
}