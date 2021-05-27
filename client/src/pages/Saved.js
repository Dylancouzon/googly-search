import React, { Component } from 'react';
import SavedBook from "../components/SavedBook/SavedBook.js";
import API from "../utils/API";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount = () => {
        this.loadBooks();
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

    loadBooks = () => {
        API.getSavedBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <>
            {this.state.savedBooks.map((book) => {
                return <SavedBook value={book} handleDeleteButton={this.handleDeleteButton} />
            })}
            </>
        )
    }
}

export default Saved;















