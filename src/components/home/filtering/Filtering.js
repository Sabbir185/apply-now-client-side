import React from "react";
import { useForm } from "react-hook-form";
import jobVacancy from '../../../images/jobVacancy.png';
import './Filtering.css';
// import DataCard from "../dataCard/DataCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllPost, popularJobPosts } from "../../../redux/actions/actions";


const Filtering = ( ) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const jobData = useSelector((state) => {
        return state.data.postedData;
    })

    console.log('new ',jobData);
    // eslint-disable-next-line no-unused-vars
    // let [displayHide, setDisplayHide] = useState(false);

    // search data request
    const onSubmit = async (data) => {
        dispatch(getAllPost(data));
    }

    // popular keyword data request
    const keySubmit = async (key) => {
        dispatch(popularJobPosts(key));
    } 

    return (
        <div className= "mt-5 bg-search">
            {/* search job with keyword and job type */}
            {/* style={{ display: `${displayHide ? "none" : ""}` }} */}
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
            {/* style={{ display: `${displayHide ? "none" : ""}` }} */}
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


            {/* component load with data */}
            {/* <section>
                {
                   data?.map((info) => <DataCard data={info} key={info._id}/> )
                }
            </section> */}

        </div>
    );
};

export default Filtering;
