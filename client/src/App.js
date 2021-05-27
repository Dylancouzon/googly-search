import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";


import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
    return (
      <Container className="p-3" >
        <Navbar />
        <Jumbotron />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Router>
      </Container>
    );

}


export default App;
