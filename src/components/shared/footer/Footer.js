import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../images/companyLogo/facebook.png'
import github from '../../../images/companyLogo/github.png'
import linkedin from '../../../images/companyLogo/linkedin.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <section className="row">
                <div className="col-xs-12 col-sm-6 col-lg-3 col-xlg-3">
                    <h5 className="text-dark mb-3">ADDRESS</h5>
                    <address>
                        KDA, avenue <br />
                        Shibbari-more <br />
                        Khulna, Bangladesh

                    </address>
                </div>

                <div className="col-xs-12 col-sm-6 col-lg-3 col-xlg-3">
                    <h5 className="text-dark mb-3">Useful links</h5>
                    <a href="https://www.coursera.org/" target="_blank" rel="noreferrer" className="text-decoration-none footer-color"> <span>Coursera Inc.</span></a>  <br />
                    <a href="https://www.udemy.com/" target="_blank" rel="noreferrer" className="text-decoration-none footer-color"> <span>Udemy Academy</span> </a> <br />
                    <a href="https://www.rokomari.com/" target="_blank" rel="noreferrer" className="text-decoration-none footer-color"> <span>Rokomari for books</span> </a>                                                     
                </div>

                <div className="col-xs-12 col-sm-6 col-lg-3 col-xlg-3">
                    <h5 className="text-dark mb-3">Apply-Now</h5>
                    <a href="https://sabbir-ahmmed.web.app/" target="_blank" rel="noreferrer" className="text-decoration-none footer-color"><span>About</span></a> <br />
                    <a href="https://dev.to/sabbir185" target="_blank" rel="noreferrer" className="text-decoration-none footer-color"><span>Blogs</span></a> <br />
                    <Link to="/admin" className="text-decoration-none footer-color"><span>Admin</span></Link>                
                </div>

                <div className="col-xs-12 col-sm-6 col-lg-3 col-xlg-3">
                    <h5 className="text-dark mb-3">Contact Us</h5>
                    <a href="https://www.facebook.com/sabbir185/" target="_blank" rel="noreferrer"> <img src={facebook} alt="" className="img-fluid social-logo"/> </a>
                    <a href="https://github.com/Sabbir185" target="_blank" rel="noreferrer"> <img src={github} alt="" className="img-fluid social-logo"/> </a>
                    <a href="https://www.linkedin.com/in/sabbir185/" target="_blank" rel="noreferrer"> <img src={linkedin} alt="" className="img-fluid social-logo"/> </a>
                </div>
            </section>

            <div className="text-center pt-5 fst-italic me-5">
                <small>Copyright © { new Date().getFullYear() }</small> <br />
                <small>Built with MERN Stack, by <a href="https://www.linkedin.com/in/sabbir185/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">SABBIR AHMMED</a></small>
            </div>

        </footer>
    );
};

export default Footer;