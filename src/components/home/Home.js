import React from 'react';
import { useSelector } from 'react-redux';
import MainNav from '../shared/mainNav/MainNav';
import Filtering from './filtering/Filtering';

const Home = () => {
    let count='';
    const loginData = useSelector((state) => {
        count = Object.keys(state.userLoginData.userLoginData).length;
        console.log(state.recruiterSignUp.signUpData);
        return state.userLoginData.userLoginData
     })

     if(count > 0){
        localStorage.setItem('jwt',JSON.stringify(loginData.token));
     }
    
    
    return (
        <div>
            <MainNav/>
            <Filtering/>
        </div>
    );
};

export default Home;