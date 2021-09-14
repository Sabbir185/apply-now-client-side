import React, { useEffect, useState } from 'react';
import profileImg from '../../../images/profileImageLogo.png';
import ProfileSide from '../profileSide/ProfileSide';
import './RecruiterProfile.css';

// name capitalize fixed
const capitalWord = (word='') => {
    const str = word;
    const capitalForm = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalForm;
}

const RecruiterProfile = (props) => {
    const id = props.recruiter;
    const [recruiterData, setRecruiterData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/recruiter/${id}`)
        .then(res => res.json())
        .then(data => {
            setRecruiterData(data.user[0])
        })
    },[id])

    const { role, name, email, company, country, createdAt} = recruiterData;


    return (
        <div>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xlg-4 profile-info bg-light">
                    <img src={profileImg} alt="" className="img-fluid profile-img mt-3"/>
                    <button type="submit" className="btn search-button text-center d-block mx-auto mt-4"> &nbsp;&nbsp;&nbsp;&nbsp; Update Profile</button>
                    <hr />
                    <div className='profile-info__container mt-5'>
                        <h6 className="text-success">Role : {capitalWord(role)}</h6>
                        <h6 className="text-primary">Name : {name}</h6>
                        <h6 className="text-success">Email : {email}</h6>
                        <h6 className="text-primary">Join Date : {new Date(`${createdAt}`).toDateString()}</h6>
                        <h6 className="text-success">Company : {company}</h6>
                        <h6 className="text-primary">Country : {capitalWord(country)}</h6>
                        
                    </div>
                </div>
                <div className="col">
                    <ProfileSide />
                </div>
            </div>
        </div>
    );
};

export default RecruiterProfile;