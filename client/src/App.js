import React, { Component } from "react";
import logo from "./logo.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Search from "./components/Search/Search";
import Book from './components/Book/Book';

function App() {
  return (
    <Container className="p-3" >
      <Navbar />
      <Jumbotron />
      <Search />
      <Book />
      <Book />
      <Book />
    </Container>
  );
}


export default App;
