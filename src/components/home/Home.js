import React from 'react';
import { useSelector } from 'react-redux';
import MainNav from '../shared/mainNav/MainNav';
import Filtering from './filtering/Filtering';
import HowItWorks from './howItWorks/HowItWorks';

const Home = () => {
    let userLogin=0;
    let recruiterLogin=0;

    const loginData = useSelector((state) => {
        if(Object.keys(state.userLoginData.userLoginData).length > 0) {
            userLogin = Object.keys(state.userLoginData.userLoginData).length;
            return state.userLoginData.userLoginData;
        } else if(Object.keys(state.recruiterLoginData.loginData).length > 0) {
            recruiterLogin = Object.keys(state.recruiterLoginData.loginData).length;
            return state.recruiterLoginData.loginData
        } else{
            return -1;
        }
        
     })


     if(userLogin > 0){
        localStorage.setItem('jwt',JSON.stringify(loginData.token));
     }
     if(recruiterLogin > 0){
        localStorage.setItem('jwt',JSON.stringify(loginData.token));
     }
    
    
    return (
        <div>
            <MainNav />
            <Filtering />
            <HowItWorks />
        </div>
    );
};

export default Home;