import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div>

    <Navbar bg="light" expand="lg" className="" variant="light">
      <Container>
        <Navbar.Brand href="#home"><span className="text-dark">ApplyNow</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                <Link to='/' className='nav-link me-3 text-dark'>Home</Link>
                <NavDropdown title="Services" id="basic-nav-dropdown" className="me-3">
                    <NavDropdown.Item href="#">Education</NavDropdown.Item>
                    <NavDropdown.Item href="#">Technologies</NavDropdown.Item>
                    <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Career</NavDropdown.Item>
                </NavDropdown>
                <Link to='/' className='nav-link me-3 text-dark'>SignUp</Link>
                <Link to='/' className='nav-link me-3 text-dark'>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  );
};

export default MainNav;
