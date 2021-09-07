import React from "react";
import { useForm } from "react-hook-form";
import './Filtering.css'

const Filtering = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="mt-5">
            {/* search job with keyword and job type */}
            <section>
                <form onSubmit={handleSubmit(onSubmit)} className="search-form">
                    <div className='input-width'>
                        <input {...register("firstName")} className="form-control" placeholder="Enter keyword... ex: nodejs, reactjs etc"/>
                    </div>
                    <div className="jobType">
                        <select {...register("jobType")} className="form-control">
                            <option >Select job type</option>
                            <option value="remote">Remote</option>
                            <option value="office work">Office work</option>
                        </select>
                    </div>
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </form>
            </section>


            {/* popular job */}
            <section className="suggestion">
                <h5 className="mb-4"> Popular Keywords : </h5>
                <span className="keyword">Nodejs</span>
                <span className="keyword">Reactjs</span>
                <span className="keyword">PHP</span>
                <span className="keyword">Python</span>
                <span className="keyword">Dotnet</span>
                <span className="keyword">Java</span>

                <br /> <br />
                <span className="keyword">GO lang</span>
                <span className="keyword">Angularjs</span>
                <span className="keyword">Rust</span>
                <span className="keyword">Laravel</span>
                <span className="keyword">Vuejs</span>

                <br /> <br />
                <span className="keyword">Cloud Eng.</span>
                <span className="keyword">DevOps Eng.</span>
                <span className="keyword">System Des.</span>
                <span className="keyword">Product manager</span>
            </section>
        </div>
    );
};

export default Filtering;
