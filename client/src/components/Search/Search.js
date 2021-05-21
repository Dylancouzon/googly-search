import React from 'react';

import { Col, Row, InputGroup, FormControl, Container, Button } from 'react-bootstrap/';



const Search = () => (
    <Container >
        <Row className="justify-content-md-center">
            <Col xs lg="6">
                <InputGroup className="mb-3" xs lg="2">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Book Name:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    </Container>
);

export default Search;
