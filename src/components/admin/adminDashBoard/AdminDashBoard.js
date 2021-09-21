import React from 'react';
import './AdminDashBoard.css';
import defaultImage from '../../../images/profileImageLogo.png'
import jwt_decode from 'jwt-decode'
import InfoContainer from '../infoContainer/InfoContainer';
import { isToken } from '../../../utils/auth';
import { Link, useHistory } from 'react-router-dom';
import back from '../../../images/back.png'

const AdminDashBoard = () => {
    const history = useHistory();
    const {
        username, name, email, role
    } = jwt_decode(JSON.parse(localStorage.getItem('jwt')));

    if(isToken() === false) {
        history.push('/admin')
    }


    return (
        <section>
            <Link to='/' className="home-button">
                <img src={back} alt="" className="backImgBtn"/>
            </Link>
            <section className="row d-flex align-items-center justify-content-center admin-dashBoard">
                <div className="col">
                    <img src={defaultImage} alt="" className="img-fluid admin-img"/>
                </div>
                <div className="col admin-info">
                    <h5 className="text-capitalize textColor1 fw-bold">Welcome : {role}</h5>
                    <p className="textColor2 fw-bold">{username}</p>
                    <p className="textColor1 fw-bold">{name}</p>
                    <p className="textColor2 fw-bold">{email}</p>
                    <p></p>
                </div>
            </section>

            <section>
                <InfoContainer />
            </section>
            


        </section>
    );
};

export default AdminDashBoard;