import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddAdmin.css'

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const token = JSON.parse(localStorage.getItem('jwt'));

    const onSubmit = async data => {
        try {
            const res = await axios.post('http://localhost:8080/admin', data, {
                                    headers: {'Authorization': `Bearer ${token}`} });
            if(res.data) {
                toast.success("New Admin Created Successfully! Login now...");
                setTimeout(() => {
                    history.pushState('/');
                }, 5000);
            }
        } catch (error) {
            toast.error("Failed to Create!");
        }
    };


    return (
        <div className="add-admin">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="py-5">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-light p-4 admin-form-size">
                    <input {...register("username", { required: true })} className="form-control" placeholder="Username"/>
                    {errors.username && <span className="text-danger">This field is required</span>}
                    
                    <input {...register("name", { required: true })} className="form-control mt-3" placeholder="Name"/>
                    {errors.name && <span className="text-danger">This field is required</span>}
                    
                    <input type="email" {...register("email", { required: true })} className="form-control mt-3" placeholder="Email"/>
                    {errors.email && <span className="text-danger">This field is required</span>}
                    
                    <input type="password" {...register("password", { required: true })} className="form-control mt-3" placeholder="Password"/>
                    {errors.password && <span className="text-danger">This field is required</span>}
                    
                    <input type="submit" className="btn btn-success d-block mx-auto mt-3" value="Add Admin"/>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;