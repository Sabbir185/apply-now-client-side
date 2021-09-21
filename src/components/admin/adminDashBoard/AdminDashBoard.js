import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import support from '../../../images/Support.png'
import Fade from 'react-reveal/Fade';
import './AdminDashBoard.css'

const AdminDashBoard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="admin">
            
            <div className="row">
                <div className="col">
                    <Fade left>
                        <img src={support} alt="" className="img-fluid admin-support"/>
                    </Fade>      
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6">
                    <Fade right>
                    <h1 className="admin-title">Admin Dashboard</h1>
                    <div className="admin-form__container">
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("username", { required: true })} placeholder="Username" className="form-control"/>
                        {errors.username && <span className="text-danger fst-italic">This field is required</span>}
                        
                        <input type="password" {...register("password", { required: true })} placeholder="Password" className="form-control mt-3"/>
                        {errors.password && <span className="text-danger fst-italic">This field is required</span>}
                        
                        <button type="submit" className="btn btn-primary bg-success search-button text-center mt-4 d-block mx-auto"> 
                            &nbsp;&nbsp;&nbsp;&nbsp; Login
                        </button>
                        <small className="d-block text-center fst-italic mt-3">If you are not an admin, go <Link to="/" className=" text-success fw-bold">Home</Link> </small>
                    </form>
                    </div>
                    </Fade> 
                </div>                 
            </div>

        </section>
    );
};

export default AdminDashBoard;