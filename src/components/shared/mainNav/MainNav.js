import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory} from "react-router-dom";
import profile_logo from '../../../images/engineer.png'
import logo from '../../../images/logo.png'
import './MainNav.css'
import { isToken } from "../../../utils/auth";
import jwt_decode from "jwt-decode";

const MainNav = () => {
  const history = useHistory()
  const toggle = isToken();
  
  let name = '';
  let admin = '';

  if(toggle){
    let  { username, role } = jwt_decode(JSON.parse(localStorage.getItem('jwt')));
    name = username;
    admin = role;
  }
  
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    history.push('/');
    window.location.reload();
  }

  const handleProfile = () => {
    history.push('/profile')
  }
  const handleAdmin = () => {
    history.push('/admin-dashboard');
  }


  return (
    <div>

      <Navbar expand="lg" className="bg-color">
        <Container>
          <Navbar.Brand>
            <Link to='/' className='nav-link me-3 text-dark'>
              <img src={logo} alt="" className="img-fluid logo"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                  <Link to='/home' className='nav-link me-3 text-style'>Home</Link>
                  <NavDropdown title="Services" id="nav-dropdown-dark-example" className="me-3">
                      <NavDropdown.Item href="https://www.udemy.com/" target="_blank" className="bg-color__dropdown">Education</NavDropdown.Item>
                      <NavDropdown.Item href="https://sabbir-ahmmed.web.app/" target="_blank" className="bg-color__dropdown">About</NavDropdown.Item>
                      <NavDropdown.Item href="https://dev.to/sabbir185" target="_blank" className="bg-color__dropdown">Blogs</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="https://www.linkedin.com/in/sabbir185/" target="_blank" className="bg-color__dropdown">Contact</NavDropdown.Item>
                  </NavDropdown>
                 
                  {
                    toggle ? (
                      <>
                        <NavDropdown
                          id="nav-dropdown-dark-example"
                          title={ name }
                          menuVariant="light"
                        >
                          {admin === 'admin'?
                            <NavDropdown.Item className="bg-color__dropdown" onClick={handleAdmin}>Admin</NavDropdown.Item>
                            :
                            <NavDropdown.Item className="bg-color__dropdown" onClick={handleProfile}>Profile</NavDropdown.Item>
                          }
                          <NavDropdown.Divider />
                          <NavDropdown.Item className="bg-color__dropdown" onClick={handleSignOut}>Sign Out</NavDropdown.Item>
                        </NavDropdown>

                        <Link to='/' className='nav-link me-3 text-dark'><img src={profile_logo} alt="" className="img-fluid img-fixed"/> </Link>
                      </>
                    )
                    :
                    <div className="d-flex" style={{display: `${toggle ? 'none' : 'block' }`}}>
                        <Link to='/sign-up' className='nav-link me-3 text-style'>SignUp</Link>
                        <Link to='/login' className='nav-link me-3 text-style'>Login</Link>
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
