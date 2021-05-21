import axios from "axios";

export default {
    // Get book based on search
    getBooks: function(book) {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
        .then(res => {
            const newData = [];
            res.data.items.forEach((book)=>{
              newData.push({
                    name: book.volumeInfo.title,
                    author: book.volumeInfo.authors[0],
                    publishedDate: book.volumeInfo.publishedDate,
                    description:book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks,
                    link: book.selfLink
              });
            });
            console.log(newData)
            return newData;
          })
          .catch(err => console.log(err));
        
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