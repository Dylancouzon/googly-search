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
    page: true
  };

  componentDidMount() {
    //The api call works on api.js but returns undefined here ???
    const getBooks = API.getBooks("HarryPotter");
    this.setState({ books: getBooks });
    setTimeout(function(){ console.log(getBooks) }, 1000);

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


  // handlesavebutton(id) => {
  //   API.saveBook(this.state.books[id])
  // }
  // handledeletebutton(id) => {
  //   API.deleteBook(id)
  //   updateSavedBooks()
  // }

  // updateSavedBooks(){
  //   const books = API.getSavedBooks();
  //   this.setState({
  //     savedbooks: books
  //   });
  // }
  // {page ?
  //   this.state.books.map(<Book value={}/>) 
  // : this.state.saveBooks.map(<Book value={}/>) }
  render() {
    return (
      <Container className="p-3" >
        <Navbar />
        <Jumbotron />
        <Search />




      </Container>
    );
  }
}


export default App;
