import React from 'react';
import './JobCards.css'

const JobCard = (props) => {
    console.log('from card ', props.data)
    const { title, jobType, company, country } = props.data;

    // string first character Capital letter
    const str = country;
    const country_name = str.charAt(0).toUpperCase() + str.slice(1);

    // string first character Capital letter
    const str3 = jobType;
    const job_type = str3.charAt(0).toUpperCase() + str3.slice(1);




    return (
        <div 
            className="card border-success mb-3 text-center" 
            style={{ maxWidth: "18rem" }}


        >
            <div className="card-header fw-bold">{title.toUpperCase()}</div>
            <div className="card-body text-secondary">
                <h6 className="card-title">Job Type : {job_type}</h6>
                <h6 className="card-title">Company : {company}</h6>
                <h6 className="card-title">Country : {country_name}</h6>
            </div>
        </div>
    );
};

export default JobCard;