import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import fb from '../../../images/companyLogo/facebook.png'
import github from '../../../images/companyLogo/github.png'
import linkedin from '../../../images/companyLogo/linkedin.png'
import microsoft from '../../../images/companyLogo/microsoft.png'
import opera from '../../../images/companyLogo/opera.png'
import pinterest from '../../../images/companyLogo/pinterest.png'
import reddit from '../../../images/companyLogo/reddit.png'
import slack from '../../../images/companyLogo/slack.png'
import soundcloud from '../../../images/companyLogo/soundcloud.png'
import spotify from '../../../images/companyLogo/spotify.png'
import vk from '../../../images/companyLogo/vk.png'
import './Sponsor.css'

const Sponsor = () => {
    let settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <div className="sponsor py-5">
            <h4 className="sponsor-title">Thanks For Supporting Us</h4>
            <Slider {...settings} className="sponsor-container">
                <div>
                    <img src={fb} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={github} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={linkedin} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={microsoft} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={opera} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={pinterest} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={reddit} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={slack} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={soundcloud} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={spotify} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
                <div>
                    <img src={vk} alt="" className="img-fluid w-25 brand-logo"/>
                </div>
            </Slider>
        </div>
    );
};

export default Sponsor;