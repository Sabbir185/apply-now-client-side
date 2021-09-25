import React from "react";
import { useForm } from "react-hook-form";
import jobVacancy from '../../../images/jobVacancy.png';
import './Filtering.css';
import { useDispatch } from "react-redux";
import { getAllPost, popularJobPosts } from "../../../redux/actions/actions";
import { useHistory } from "react-router-dom";


const Filtering = ( ) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    // search data request
    const onSubmit = async (data) => {
        dispatch(getAllPost(data));
        if(data.title) {
            history.push('/jobs');
        }
    }

    // popular keyword data request
    const keySubmit = async (key) => {
        // initial data send
        const payload = {          
                 page: "1",
                 limit: "9"
        }
        dispatch(popularJobPosts(key, payload));
       
        history.push('/popular-jobs');

    } 

    return (
        <main className= "mt-5 bg-search">
            {/* search job with keyword and job type */}
            <section >
                <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                    <div className='input-width'>
                        <input {...register("title")} className="form-control" placeholder="Enter keyword... ex: nodejs, reactjs etc"/>
                    </div>
                    <div className="jobType">
                        <select {...register("jobType")} className="form-control">
                            <option >Select job type</option>
                            <option value="remote">Remote</option>
                            <option value="office work">Office work</option>
                        </select>
                    </div>
                    <button type="submit" className="btn search-button text-center"> &nbsp;&nbsp;&nbsp;&nbsp; Search</button>
                </form>
            </section>

            {/* popular job */}
            <section className='row' >
                <div className="suggestion col">
                    <h5 className="mb-4"> Popular Keywords : </h5>
                    <span className="keyword" onClick={() => keySubmit('nodejs')}>Nodejs</span>
                    <span className="keyword" onClick={() => keySubmit('reactjs')}>Reactjs</span>
                    <span className="keyword" onClick={() => keySubmit('php')}>PHP</span>
                    <span className="keyword" onClick={() => keySubmit('python')}>Python</span>
                    <span className="keyword" onClick={() => keySubmit('dotnet')}>Dotnet</span>
                    <span className="keyword" onClick={() => keySubmit('java')}>Java</span>

                    <br />
                    <span className="keyword" onClick={() => keySubmit('go lang')}>Go lang</span>
                    <span className="keyword" onClick={() => keySubmit('angularjs')}>Angularjs</span>
                    <span className="keyword" onClick={() => keySubmit('rust')}>Rust</span>
                    <span className="keyword" onClick={() => keySubmit('laravel')}>Laravel</span>
                    <span className="keyword" onClick={() => keySubmit('vuejs')}>Vuejs</span>

                    <br />
                    <span className="keyword bottom-fix" onClick={() => keySubmit('cloud engineer')}>Cloud Eng.</span>
                    <span className="keyword" onClick={() => keySubmit('devops engineer')}>DevOps Eng.</span>
                    <span className="keyword" onClick={() => keySubmit('system designer')}>System Des.</span>
                    <span className="keyword mobile-view" onClick={() => keySubmit('product manager')}>Product manager</span>
                </div>

                <div className="col-sm-12 col-md-5 col-lg-5 col-xlg-5">
                    <img src={jobVacancy} alt="Job Vacancy" className="img-fluid img-size"/>
                </div>
            </section>

        </main>
    );
};

export default Filtering;
