import React from 'react';


import {Form, Button} from 'react-bootstrap';
import BSNavbar from 'react-bootstrap/Navbar';

const Navbar = () => (
    <BSNavbar bg="dark" className="justify-content-between" variant="dark">
    <BSNavbar.Brand href="#home">
      <img
        alt=""
        src="https://blog.hubspot.com/hubfs/image8-2.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Google-Books Search
    </BSNavbar.Brand>
    <Form>
      <Button href="/" className="mr-3">Search</Button>
      <Button href="/saved" >Saved</Button>
    </Form>
  </BSNavbar>
);

export default Navbar;
