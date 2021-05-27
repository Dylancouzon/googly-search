import React, { Component } from "react";

import Search from '../components/Search/Search';
import Book from '../components/Book/Book';
import API from "../utils/API";

class Home extends Component {

    state = {
        books: [],
        savedbooks: [],
        page: true,
        search: ""
    };


    handleSearchbutton = () => {
        API.getBooks(this.state.search)
            .then(res => {
                const newData = [];
                console.log(res);
                res.data.items.forEach((book) => {
                    let imageURL;
                    if (book.volumeInfo.imageLinks) {
                        imageURL = book.volumeInfo.imageLinks.thumbnail;
                    } else {
                        imageURL = "";
                    }
                    newData.push({
                        name: book.volumeInfo.title,
                        author: book.volumeInfo.authors[0],
                        publishedDate: book.volumeInfo.publishedDate,
                        description: book.volumeInfo.description,
                        image: imageURL,
                        link: book.selfLink
                    });
                });
                this.setState({ books: newData })
                console.log(this.state.books);
            });
    }

    handleInputChange = (e) => {
        const searchVal = e.target.value;
        this.setState({
            search: searchVal
        });
    }

    handleSaveButton = (data) => {
        API.saveBook(data)
            .then(() => this.updateSavedBooks());
    }

    handleDeleteButton = (id) => {
        API.deleteBook(id)
            .then(() => this.updateSavedBooks());
    }

    updateSavedBooks = () => {
        const books = API.getSavedBooks();
        this.setState({
            savedbooks: books
        });
    }
    
    render() {
        return (

            <>
                <Search handleSearchbutton={this.handleSearchbutton} handleInputChange={this.handleInputChange} />
        {this.state.books.map((book)=>{
            return <Book value={book} handleSaveButton={this.handleSaveButton} />;
        })}
            </>
        );
    }
}

export default Home;

