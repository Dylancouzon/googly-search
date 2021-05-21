import React, { Component } from "react";
import logo from "./logo.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="p-3" >
      <Navbar />
      <Jumbotron />
    </Container>
  );
}


export default App;
