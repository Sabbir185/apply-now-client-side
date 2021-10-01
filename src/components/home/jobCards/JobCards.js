import React from 'react';
import { useHistory } from 'react-router';
import './JobCards.css';

// name capitalize fixed
const capitalWord = (word) => {
    const str = word;
    const capitalForm = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalForm;
}


const JobCard = (props) => {
    const { title, jobType, company, country, _id, isApproved } = props.data;


    const history = useHistory();
    const passIdHandler = (id) => {
        history.push(`/view-details/${id}`);
    }


    return (
        <div 
            className="card border-muted mb-3 text-center job-card" 
            style={{ maxWidth: "18rem", display: `${isApproved? "block" : "none"}` }}
            onClick={() => passIdHandler(_id)}
        >
            <div className="card-header fw-bold">{title.toUpperCase()}</div>
            <div className="card-body text-secondary">
                <h6 className="card-title">Job Type : {capitalWord(jobType)}</h6>
                <h6 className="card-title">Company : {company}</h6>
                <h6 className="card-title">Country : {country.length<=3 ? country.toUpperCase() : capitalWord(country)}</h6>
            </div>
        </div>
    );
};

export default JobCard;