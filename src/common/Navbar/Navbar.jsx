import React from "react";
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-white navbar">
        <Container>
          <Navbar.Brand href="#home">YOUNG LAB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">PROYECTOS</Nav.Link>
              <Nav.Link href="#link">ABOUT</Nav.Link>
              <Nav.Link href="#link">TENEMOS QUE HABLAR</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}