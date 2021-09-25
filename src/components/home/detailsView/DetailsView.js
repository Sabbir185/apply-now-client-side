import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MainNav from '../../shared/mainNav/MainNav';
import hiring1 from '../../../images/b (1).png';
import axios from 'axios';
import './DetailsView.css';
import Footer from '../../shared/footer/Footer';

// name capitalize fixed
const capitalWord = (word='') => {
    const str = word;
    const capitalForm = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalForm;
}

const DetailsView = () => {
    const { id } = useParams()
    const data = useSelector((state) => state.recentJob.recentJob );

    let post={};
    if(data.length > 0) {
        post = data.find( doc => doc._id === id )
    }

    const { title, company, createdAt, description, jobType, salary, country, recruiter} = post;
    const date = new Date(createdAt);

    const token = JSON.parse(localStorage.getItem('jwt'));

    // handle Application
    const handleApply = async (e) => {
        e.preventDefault();
        try {
            const application = {
                title,
                company,
                description,
                jobType,
                salary,
                country,
                recruiterId: recruiter,
                userCV: e.target[0].value
            }

            const res = await axios.post('http://localhost:8080/application',application, 
                                    { headers: {'Authorization': `Bearer ${token}`} });

            if(res.data){
                alert(res.data.status);
            }

        } catch (error) {
            alert(error.response.data.status);
        }
    }

    
    return (
        <div>
            <MainNav />

            {/* job details view design */}
            { 
                data.length > 0 &&
                <div className="row container">
                    <div className="col-sm-12 sol-md-4 col-lg-4 col-xlg-4 mt-5">
                        <img src={hiring1} alt="" className="img-fluid d-block mx-auto"/>
                    </div>
                    <div className="col me-5 mt-5 ms-5 description-container">

                        <h5 className="mt-4">Job Title : {title.toUpperCase()}</h5>
                        <small>published date: {date.toDateString()}</small>
                        <hr />
                        <h6>Job Descriptions</h6>
                        <p className="mt-2">{description}</p> 
                        <hr />
                        <h6>Job Type : {capitalWord(jobType)}</h6>
                        <h6>Company : {company}</h6>
                        <h6>Salary Range : {salary}</h6>
                        <h6>Country : {country.length<=3 ? country.toUpperCase() : capitalWord(country)}</h6>

                        <form onSubmit={handleApply}>
                            <div className="row mt-3 d-flex align-items-center">
                                <div className="col-sm-3 col-md-3 col-lg-3 col-xlg-3 fw-bold">
                                    <label htmlFor="cv">Resume link : </label>
                                </div>
                                <div className="col">
                                    <input type="text" placeholder='Share resume link' className="form-control" name="cv" id="cv"/>
                                </div>
                            </div>

                            <button 
                            type="submit" className="btn search-button text-center mt-5" 
                            > 
                                &nbsp;&nbsp;&nbsp;&nbsp; Apply Now
                            </button>
                        </form>

                    </div>
                </div>
            }

            <Footer />

        </div>
    );
};

export default DetailsView;