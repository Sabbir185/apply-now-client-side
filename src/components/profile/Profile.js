import React, { useEffect, useState } from 'react';
import MainNav from '../shared/mainNav/MainNav';
import jwt_decode from 'jwt-decode';
import RecruiterProfile from '../recruiter/profile/RecruiterProfile';
import UserProfile from '../user/UserProfile';

const Profile = () => {
    const [profileToggle, setProfileToggle] = useState(false);
    const [tokenData, setTokenData] = useState({});
    const [userData, setUserData] = useState({});
    const [recruiterData, setRecruiterData] = useState({});

    useEffect(() => {
        const token = jwt_decode(JSON.parse(localStorage.getItem('jwt')));
        setTokenData(token)
    },[])

    useEffect(() => {
        if(tokenData.role === 'user') {
            fetch(`http://localhost:8080/user/${tokenData.id}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                setProfileToggle(true)
            })
    
        }else if(tokenData.role === 'recruiter') {
            fetch(`http://localhost:8080/recruiter/${tokenData.id}`)
            .then(res => res.json())
            .then(data => {
                setRecruiterData(data)
                setProfileToggle(false)
            })
        }
    },[tokenData])

 
    return (
        <div>
            <MainNav />

            {
                profileToggle ?  
                <UserProfile user={userData}/>
                : 
                <RecruiterProfile recruiter={recruiterData} /> 
            }
        </div>
    );
};

export default Profile;