import React from 'react';


import {Form, Button} from 'react-bootstrap';
import BSNavbar from 'react-bootstrap/Navbar';

const Navbar = () => (
    <BSNavbar bg="dark" className="justify-content-between" variant="dark">
    <BSNavbar.Brand href="/">
      <img
        alt=""
        src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"
        width="35"
        height="35"
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
