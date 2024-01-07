import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Navbar.Brand as={Link} to="/">
        <img
          src="/logo.png"
          alt="Mega Kenyan House Booking"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          {/* Add more navigation links as needed */}
        </Nav>
        <Nav>
          <Button variant="outline-secondary" as={Link} to="/login" className="mr-2">
            Login
          </Button>
          <Button variant="primary" as={Link} to="/register">
            Register
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

