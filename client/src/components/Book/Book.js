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

const Book = () => (
    <Container style={styles}>
        <Figure >
        <Button style={bstyles} variant="light" className="mt-3 mr-2">View</Button>{' '}
        <Button style={bstyles} variant="light" className="mt-3 mr-2">Save</Button>
            <Figure.Caption>
                <h3>A song of ice & Fire</h3>
                <h4>Written by Geroge R.R Martin</h4>
            </Figure.Caption>
            
            <Figure.Image
                style={fstyles}
                width={171}
                height={180}
                alt="171x180"
                src="https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed congue quam. Donec justo magna, auctor at ipsum non, iaculis feugiat ipsum. Nam pretium sem quis libero varius mollis. Mauris sodales convallis nisl id tristique. Nullam tristique ultrices felis, porta vehicula justo pharetra at. Pellentesque in mauris ac nisl condimentum interdum ut non nunc. In venenatis sodales congue. Vivamus elementum lacinia imperdiet. Donec ut tempus sem.</p>
        </Figure>

    </Container>
);

export default Book;
