import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MainNav from '../../shared/mainNav/MainNav';
import hiring1 from '../../../images/b (1).png';
import './DetailsView.css';

// name capitalize fixed
const capitalWord = (word) => {
    const str = word;
    const capitalForm = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalForm;
}

const DetailsView = () => {
    const { id } = useParams()
    const data = useSelector((state) => state.recentJob.recentJob );

    const post = data.find( doc => doc._id === id )

     const { 
         title, 
         company, 
         createdAt, 
         description,
         jobType,
         salary,
         country
    } = post;

    const date = new Date(createdAt);


    // handle Application
    const handleApply = () => {
        console.log(title)
    }

    return (
        <div>
            <MainNav />

            {/* job details view design */}
            <div className="row container">
                <div className="col-sm-12 sol-md-4 col-lg-4 col-xlg-4 mt-5">
                    <img src={hiring1} alt="" className="img-fluid d-block mx-auto"/>
                </div>
                <div className="col me-5 mt-5 ms-5 description-container">

                    <h5 className="mt-4">Job Title : {title.toUpperCase()}</h5>
                    <small>published date: {date.toDateString()}</small>
                    <hr />
                    <h6>Job Descriptions</h6>
                    <pre><h6 className="mt-2">{description}</h6></pre> 
                    <hr />
                    <h6>Job Type : {capitalWord(jobType)}</h6>
                    <h6>Company : {company}</h6>
                    <h6>Salary Range : {salary}</h6>
                    <h6>Country : {country.length<=3 ? country.toUpperCase() : capitalWord(country)}</h6>


                    <button 
                        type="submit" className="btn search-button text-center mt-4" 
                        onClick={() => handleApply()}

                    > 
                        &nbsp;&nbsp;&nbsp;&nbsp; Apply Now

                    </button>

                </div>
            </div>

        </div>
    );
};

export default DetailsView;