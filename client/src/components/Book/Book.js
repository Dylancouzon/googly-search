import React from 'react';


import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

var styles = {
    backgroundColor: '#343A40',
    marginBottom: 6,
    color: "white"
};

var fstyles = {
    display: 'inline-block',
    float: "left"
};

var bstyles = {
    display: 'inline-block',
    float: "right"
};

const Book = ({value}) => (
    <Container style={styles}>
        <Figure >
        <Button style={bstyles} variant="light" className="mt-3 mr-2">View</Button>{' '}
        <Button style={bstyles} variant="light" className="mt-3 mr-2" onClick={() => handleSaveButton({name: value.name, author: value.author, publishedDate: value.publishedDate, description: value.description, image: value.image, link: value.link})}>Save</Button>
            <Figure.Caption>
                <h3>{value.name}</h3>
                <h4>{value.author}</h4>
            </Figure.Caption>
            
            <Figure.Image
                style={fstyles}
                width={171}
                height={180}
                alt="171x180"
                src= {value.image}
            />
            <p>{value.description}</p>
        </Figure>

    </Container>
);

export default Book;
