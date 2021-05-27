import React from 'react';


import Container from 'react-bootstrap/Container';
import BSJumbotron from 'react-bootstrap/Jumbotron';

var styles ={ 
    backgroundImage: 'url(./hero.png)',
    color: 'white',
    objectFit: 'contain'
}

const Jumbotron = () => (
    <BSJumbotron fluid style={styles}>
        <Container >
            <h1>Google Books Search</h1>
            <p>
                Search for and save books of interest
    </p>
        </Container>
    </BSJumbotron>
);

export default Jumbotron;
