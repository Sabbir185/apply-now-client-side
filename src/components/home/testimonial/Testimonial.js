import React from 'react';
import img1 from '../../../images/avat.png'
import img2 from '../../../images/womanAvater.png'
import Ticker from '../../../utils/Ticker';
import Fade from 'react-reveal/Fade';
import './Testimonial.css'

const Testimonial = () => {


    return (
        <section className="testimonial-4 pb-5">
            <h1 className="testimonial-4__title py-4">What Our Users Say</h1>

            <Fade bottom>
            <section className="row d-flex justify-content-center align-items-center mt-4 mx-5">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xlg-4 user-1 user-common">
                   <div className='testimonial-card d-flex align-items-center justify-content-center mt-2'>
                        <img src={img1} alt="" className='img-fluid testimonial-card__img'/>
                        <div className="ms-3 fw-bold">
                            <small>Tom Hanks</small> <br />
                            <small>Architect</small>
                        </div>
                   </div>
                    <small  className='testimonial-card__text mx-2'><p>"Hi, I'm a big fan of 'Apply-Now'. It really gives me a new life. I applied from here and my hiring team member contact with me through this platform. Thanks".</p></small>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 col-xlg-4 user-2 user-common">
                    <div className='testimonial-card d-flex align-items-center justify-content-center'>
                            <img src={img2} alt="" className='img-fluid testimonial-card__img'/>
                            <div className="ms-3 fw-bold">
                                <small>Jennifer Lawrence</small> <br />
                                <small>Software Engineer</small>
                            </div>
                    </div>
                    <small  className='testimonial-card__text mx-2'><p>"I really love 'Apply-Now' platform. I found my desire job here. I hardly recommend it to all that utilize this platform to fulfill your dream. You are the right place. All the best for you."</p></small>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 col-xlg-4 user-3 user-common">
                    <div className='testimonial-card d-flex align-items-center justify-content-center mt-2'>
                            <img src={img1} alt="" className='img-fluid testimonial-card__img'/>
                            <div className="ms-3 fw-bold">
                                <small>Will Smith</small> <br />
                                <small>Product manager</small>
                            </div>
                    </div>
                    <small  className='testimonial-card__text mx-2'><p>"You've an opportunity to utilize this platform. I assure you, here you find your desire job. I want to thanks all recruiters who are giving us opportunities through this platform."</p></small>
                </div>
            </section>
            </Fade>

            <section className="container d-flex justify-content-center mt-5">             
                <h4 className="me-4">
                    <span className="post-hired">Total Job Posted :</span> <span className="number">
                         <Ticker  className="count" end={13921}/>
                    </span>
                </h4>    

                <h4 className="ms-4"> 
                    <span className="post-hired">Successfully hired :</span> <span className="number">
                        <Ticker  className="count" end={11576}/>
                    </span> 
                </h4>         
            </section>

        </section>
    );
};

export default Testimonial;