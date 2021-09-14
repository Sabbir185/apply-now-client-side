import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const CreatePost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()

    const token = JSON.parse(localStorage.getItem('jwt'));

    const onSubmit = async data => {
        try {
            const res = await axios.post('http://localhost:8080/jobPost', data, {
                                        headers: {'Authorization': `Bearer ${token}`} });
            if(res.data) {
                alert(res.data.status);
                history.push('/');
            }

        } catch (error) {
            console.log(error.response.data)
        }
    };

    return (
        
        <form onSubmit={handleSubmit(onSubmit)} className='w-75 mx-auto mt-4'>
            <input {...register("title", { required: true })} className="form-control" placeholder="Job title"/>
            {errors.title && <span>title needs at lest 6 characters</span>}

            <textarea {...register("description", { required: true, minLength: 20})} cols="30" rows="7" className="form-control mt-3" placeholder="Job description at least 20 characters "></textarea>
            {errors.description && <span>At lest 20 characters</span>}

            <input {...register("salary", { required: true })} className="form-control mt-3" placeholder="Salary range"/>
            {errors.salary && <span>This field is required</span>}

            <input {...register("country", { required: true })} className="form-control mt-3" placeholder="Country name"/>
            {errors.country && <span>This field is required</span>}

            <input {...register("jobType", { required: true })} className="form-control mt-3" placeholder="remote or office work ?"/>
            {errors.jobType && <span>This field is required</span>}

            <input {...register("company", { required: true })} className="form-control mt-3" placeholder="Company name"/>
            {errors.company && <span>This field is required</span>}


            <button type="submit" className="btn search-button d-block text-center mt-5"> &nbsp;&nbsp;&nbsp;&nbsp; Create Post</button>
         </form>
        
    );
};

export default CreatePost;