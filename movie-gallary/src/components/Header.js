import React from 'react'
import './header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function Header() {

  return (
    // <Navbar className='navbar' fixed="top" bg="light" expand="lg">

    //     <Navbar.Brand className='ms-5' href="/">M Movies</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" className='mt-1' />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mx-auto">
    //         <Nav.Link className='ms-5' href="/movies">Movies</Nav.Link>
    //         <Nav.Link className='ms-5' href="/addmovie">Add Movies</Nav.Link>

    //       </Nav>
    //     </Navbar.Collapse>

    // </Navbar>

    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand className='ms-5 colr' href="/movies">M Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='colrs ms-5 ' href="/movies">Movies</Nav.Link>
            <Nav.Link className='colrs ms-5' href="/addmovie">Add Movies</Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
