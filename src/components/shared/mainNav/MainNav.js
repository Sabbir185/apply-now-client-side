import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile_logo from '../../../images/engineer.png'
import './MainNav.css'
import { isToken } from "../../../utils/auth";

const MainNav = () => {
  const toggle = isToken();

  console.log("token : ", isToken() )
  console.log("token 2 : ", toggle )
  // const {} =  JSON.parse(localStorage.getItem('jwt')); 

  return (
    <div>

      <Navbar expand="lg" className="bg-color">
        <Container>
          <Navbar.Brand>
            <Link to='/' className='nav-link me-3 text-dark'>
              <span className="text-dark">ApplyNow</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                  <Link to='/home' className='nav-link me-3 text-dark'>Home</Link>
                  <NavDropdown title="Services" id="basic-nav-dropdown" className="me-3">
                      <NavDropdown.Item className="bg-color__dropdown">Education</NavDropdown.Item>
                      <NavDropdown.Item className="bg-color__dropdown">Technologies</NavDropdown.Item>
                      <NavDropdown.Item className="bg-color__dropdown">Blogs</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className="bg-color__dropdown">Career</NavDropdown.Item>
                  </NavDropdown>
                 
                  {
                    toggle ? (
                    <Link to='/' className='nav-link me-3 text-dark'><img src={profile_logo} alt="" className="img-fluid img-fixed"/> </Link>
                    )
                    :
                    <div className="d-flex" style={{display: `${toggle ? 'none' : 'block' }`}}>
                        <Link to='/sign-up' className='nav-link me-3 text-dark'>SignUp</Link>
                        <Link to='/login' className='nav-link me-3 text-dark'>Login</Link>
                    </div>
                  }
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default MainNav;
