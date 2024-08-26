import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavbarComponent.css';  // You can add custom styling here

const NavbarComponent = () => {
  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand id="brand">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/help" className="nav-link">Help Center</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/footer" className="nav-link">Footer</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
