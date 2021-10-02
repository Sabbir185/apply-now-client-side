import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLoginAction } from '../../redux/actions/userActions';
import MainNav from '../shared/mainNav/MainNav';
import { useHistory } from "react-router-dom";
import './Login.css'
import { recruiterLoginAction } from '../../redux/actions/recruiterActions';


const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(false);
    const [role, setRole] = useState('');

    const handleSignIn = (role) => {
        if(role === 'user' || 'recruiter'){
            setToggle(true);
            setRole(role);
        }
    }

    // handle user sign up
    const handleLogin = (event) => {
        event.preventDefault();
        const data = {
            username: event.target[0].value,
            password: event.target[1].value,
        }
        if(role === 'user') {
            dispatch(userLoginAction(data));
            document.title = `Apply Now - User`;
            history.push('/');

        }else if(role === 'recruiter') {
            dispatch(recruiterLoginAction(data));
            document.title = `Apply Now - Recruiter`;
            history.push('/');
        }
    }

    
    return (
        <div>
            <MainNav />

            <section className="sign-up">

                {/* role selection */}
                <div className="sign-up__role" style={{display: `${toggle ? 'none': 'block'}`}}>
                    <h3 className="pt-4 fw-bold">... Login ...</h3>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <button 
                            type="submit" className="btn search-button text-center mt-4" 
                            onClick={() => handleSignIn('recruiter')}

                        > 
                            &nbsp;&nbsp;&nbsp;&nbsp;Recruiter
                        </button>

                        <span className="d-inline-block fs-3 fw-bold">OR </span>

                        <button 
                            type="submit" className="btn search-button text-center mt-4" 
                            onClick={() => handleSignIn('user')}

                        > 
                            &nbsp;&nbsp;&nbsp;&nbsp; User
                        </button>
                    </div>
                </div>


                {/* login  */}
                <div style={{display: `${toggle ? 'block' : 'none'}`}} className="form-container">
                    <form  className="mx-5" onSubmit={handleLogin}>
                       <input type="text" name="username" placeholder="Username" className="form-control"/>

                       <input type="password" name="password" placeholder="Password" className="form-control mt-2"/>

                       <button type="submit" className="btn search-button text-center mt-4 form-control"> 
                            &nbsp;&nbsp;&nbsp;&nbsp; Login
                        </button>

                    </form>

                    
                    <small className="mt-3 d-inline-block">Don't have an account ? please <Link to='/sign-up' className="text-decoration-none">sign up</Link></small>
                </div>

            </section>
        </div>
    );
};

export default Login;