import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link
import Button from 'react-bootstrap/Button';

import './NavBAr.css';

function NavBar() {
  return (
    <Navbar className='Nav fixed-top' data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pru">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#producto">Productos</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          </Nav>
          <Navbar.Brand href="#inicio" className='Titul'>B Tech</Navbar.Brand>
          <Link to="/Login">
            <Button variant="dark" className='btn'>Control Room</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
