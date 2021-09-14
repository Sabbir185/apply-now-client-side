import React, { useEffect, useState } from 'react';
import profileImg from '../../images/avat.png'
import './UserProfile.css';


const UserProfile = (props) => {
    const id = props.user;
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/user/${id}`)
        .then(res => res.json())
        .then(data => {
            setUserData(data.user)
        })
    },[id])

    const {role, name, email, createdAt} = userData;

    
    return (
        <div>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xlg-4 profile-info">
                    <img src={profileImg} alt="" className="img-fluid profile-img border-0"/>
                    <button type="submit" className="btn search-button text-center d-block mx-auto mt-4"> &nbsp;&nbsp;&nbsp;&nbsp; Update Profile</button>
                    <hr />
                    <div className='profile-info__container'>
                        <h6 className="text-success text-capitalize">Role : {role}</h6>
                        <h6 className="text-primary">Name : {name}</h6>
                        <h6 className="text-success">Email : {email}</h6>
                        <h6 className="text-primary">Join Date : {new Date(`${createdAt}`).toDateString()}</h6>
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    );
};

export default UserProfile;