import React, { useState } from 'react';
import MainNav from '../shared/mainNav/MainNav';
import { useForm } from "react-hook-form";
import './SignUp.css'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../redux/actions/userActions';
import { useSelector } from 'react-redux';
import { setToken } from '../../utils/auth';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.userData);

    const history = useHistory()
    const [toggle, setToggle] = useState(false);
    const [role, setRole] = useState('');
  
    // role handler
    const handleSignUp = (role) => {
        if(role === 'user' || 'recruiter'){
            setToggle(true);
            setRole(role)
        }
    }

    // handle recruiter sign up
    const onSubmit = data => console.log(data);

    // handle user sign up
    const handleUserSignUp = (event) => {
        event.preventDefault();
        const data = {
            username: event.target[0].value,
            name: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
        }
        dispatch(userSignUp(data));
    }

    console.log(data)

    data.userInfo && setToken(data.userInfo.token);

    return (
        <div>
            <MainNav />

            <section className="sign-up">

                {/* role selection */}
                <div className="sign-up__role" style={{display: `${toggle ? 'none': 'block'}`}}>
                    <h3 className="pt-4 fw-bold">... Sign Up ...</h3>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <button 
                            type="submit" className="btn search-button text-center mt-4" 
                            onClick={() => handleSignUp('recruiter')}

                        > 
                            &nbsp;&nbsp;&nbsp;&nbsp;Recruiter
                        </button>

                        <span className="d-inline-block fs-3 fw-bold">OR </span>

                        <button 
                            type="submit" className="btn search-button text-center mt-4" 
                            onClick={() => handleSignUp('user')}

                        > 
                            &nbsp;&nbsp;&nbsp;&nbsp; User
                        </button>
                    </div>
                </div>


                <div className="text-center pt-4">
                    {
                        data?.error ? 
                        <div className="text-danger fw-bold mt-4">
                            <h6 className="alert alert-danger">{data.error.response.data.message}</h6>
                        </div>
                        :
                        <div className="text-success fw-bold">
                         <h6>{data.userInfo.status}</h6>
                          {
                              data.userInfo.status && 
                                setTimeout(() => {
                                    history.push('/')
                                }, 3000)
                           }
                        </div>
                    }
                </div>


                {/* sign up form for recruiter */}
                <div style={{display: `${toggle ? (role ==='recruiter'?'block': 'none') : 'none'}`}} className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-5">
                        
                        <input type="text" {...register("username", { required: true })} placeholder="Username" className="form-control"/>
                        {errors.username && <span className="text-danger">Username needs at lest 4 characters with number and character</span>}
                        
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="form-control mt-3"/>
                        {errors.name && <span className="text-danger">Name needs at lest 3 characters</span>}
                        
                        <input type="text" {...register("password", { required: true })} placeholder="Password" className="form-control mt-3"/>
                        {errors.password && <span className="text-danger">Password needs at lest 6 characters</span>}
                        
                        <input type="text" {...register("email", { required: true })} placeholder="Email" className="form-control mt-3"/>
                        {errors.email && <span className="text-danger">invalid email!</span>}
                        
                        <input type="text" {...register("company", { required: true })} placeholder="Company" className="form-control mt-3"/>
                        {errors.company && <span className="text-danger">company name too small!"</span>}
                        
                        <input type="text" {...register("country", { required: true })} placeholder="Country" className="form-control mt-3"/>
                        {errors.country && <span className="text-danger">country name too small!</span>}
                        
                        <button type="submit" className="btn search-button mx-auto mt-4 d-block"> 
                            &nbsp;&nbsp;&nbsp;&nbsp; Sign Up
                        </button>
                    </form>

                    <small className="mt-3 d-inline-block">Already sign up ? please <Link to='/login' className="text-decoration-none">login</Link></small>
                </div>


                {/* sign up form for user */}
                <div style={{display: `${toggle ? (role ==='user'?'block': 'none') : 'none'}`}} className="form-container">
                    <form  className="mx-5" onSubmit={handleUserSignUp}>
                       <input type="text" name="username" placeholder="Username" className="form-control"/>

                       <input type="text" name="name" placeholder="Name" className="form-control mt-2"/>

                       <input type="text" name="email" placeholder="Email" className="form-control mt-2"/>

                       <input type="text" name="password" placeholder="Password" className="form-control mt-2"/>

                       <button type="submit" className="btn search-button text-center mt-4 form-control"> 
                            &nbsp;&nbsp;&nbsp;&nbsp; Sign Up
                        </button>

                    </form>

                    <small className="mt-3 d-inline-block">Already sign up ? please <Link to='/login' className="text-decoration-none">login</Link></small>
                </div>

            </section>
        </div>
    );
};

export default SignUp;