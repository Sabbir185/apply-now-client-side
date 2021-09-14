import React from 'react';
import MainNav from '../shared/mainNav/MainNav';
import jwt_decode from 'jwt-decode';
import RecruiterProfile from '../recruiter/profile/RecruiterProfile';
import UserProfile from '../user/UserProfile';

const Profile = () => {
    const token = jwt_decode(JSON.parse(localStorage.getItem('jwt')));

    let toggle = false;

    if(token.role === 'user') {
        toggle=true
    } else if(token.role === 'recruiter') {
        toggle=false
    }
 

    return (
        <div>
            <MainNav />

            {
                toggle ?  
                <UserProfile user={token.id}/>
                : 
                <RecruiterProfile recruiter={token.id} /> 
            }
        </div>
    );
};

export default Profile;