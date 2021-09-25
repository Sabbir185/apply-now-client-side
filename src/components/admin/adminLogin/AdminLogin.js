import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import support from '../../../images/Support.png'
import Fade from 'react-reveal/Fade';
import './AdminLogin.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isToken } from '../../../utils/auth';

const AdminLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = async data => {
        try {
            const config = {
                headers: {'content-type':'application/json'}
            }
            const res = await axios.post('https://desolate-sands-39522.herokuapp.com/admin/login', data, config);
            if(res.data) {
                toast.success("Login Successful!");
                setTimeout(() => {
                    localStorage.setItem('jwt', JSON.stringify(res.data.token));
                    history.push('/admin-dashboard');
                }, 3000);
            }
        } catch (error) {
            toast.error("Failed to login!");
        }
    };

    const token = localStorage.getItem('jwt');
    if(token){
        if(isToken()) {
            history.push('/admin-dashboard')
        }
    }

    return (
        <section className="admin">
            <ToastContainer position="top-center" autoClose={2500}/>
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

export default AdminLogin;