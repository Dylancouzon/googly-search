import React, { Component } from "react";
import logo from "./logo.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Search from "./components/Search/Search";
import Book from './components/Book/Book';
import API from "./utils/API";

class App extends Component {

  state = {
    books: [],
    savedbooks: [],
    page: true,
    search: ""
  };

  componentDidMount() {
    // this.setState({ books: getBooks });


  // Result object example
  //   {
  //     "name": "Harry Potter: Knitting Magic",
  //     "author": "Tanis Gray",
  //     "publishedDate": "2020-01-28",
  //     "description": "Introducing the first official Harry Potter knitting book—a deluxe guide to creating over 25 authentic Harry Potter knits based on the iconic films. Channel the magic of the Harry Potter films from the screen to your needles with the ultimate knitter’s guide to the Wizarding World. Featuring over 25 magical knits pictured in gorgeous full-color photography, this book includes patterns for clothing, home projects, and keepsakes pulled straight from the movies—and even includes a few iconic costume pieces as seen on-screen. With yarn suggestions based on the true colors used in the films, projects range from simple patterns like the Hogwarts house scarves to more complex projects like Mrs. Weasley’s Christmas sweaters. A true fan must-have, this book also includes fun facts, original costume sketches, film stills, and other behind-the-scenes treasures. Harry Potter: Knitting Magic is sure to have fans everywhere summoning needles, conjuring yarn, and practicing their best knitting wizardry.",
  //     "image": {
  //         "smallThumbnail": "http://books.google.com/books/content?id=xHbgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  //         "thumbnail": "http://books.google.com/books/content?id=xHbgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  //     },
  //     "link": "https://www.googleapis.com/books/v1/volumes/xHbgDwAAQBAJ"
  // }
  }

  handleSearchbutton = () => {
    API.getBooks(this.state.search)
    .then(res => {
      const newData = [];
      console.log(res);
      res.data.items.forEach((book)=>{
        let imageURL;
        if(book.volumeInfo.imageLinks){
          imageURL = book.volumeInfo.imageLinks.thumbnail;
        }else{
          imageURL = "";
        }
        newData.push({
              name: book.volumeInfo.title,
              author: book.volumeInfo.authors[0],
              publishedDate: book.volumeInfo.publishedDate,
              description:book.volumeInfo.description,
              image: imageURL,
              link: book.selfLink
        });
      });
      this.setState({ books: newData })
    });
  }

  handleInputChange = (e) => {
    const searchVal = e.target.value;
    this.setState({
      search: searchVal
    });
  }

  handleSaveButton = (id) => {
    API.saveBook(this.state.books[id])
    .then(() => this.updateSavedBooks());
  }
  // handledeletebutton(id) => {
  //   API.deleteBook(id)
  //   updateSavedBooks()
  // }

  updateSavedBooks = () => {
    const books = API.getSavedBooks();
    this.setState({
      savedbooks: books
    });
  }

  render() {
    return (
      <Container className="p-3" >
        <Navbar />
        <Jumbotron />
        <Search handleSearchbutton={this.handleSearchbutton} handleInputChange={this.handleInputChange} />
        {this.state.books.map((book)=>{
          return <Book value={book} handleSaveButton={this.handleSaveButton} />;
        })}



      </Container>
    );
  }
}


export default App;
