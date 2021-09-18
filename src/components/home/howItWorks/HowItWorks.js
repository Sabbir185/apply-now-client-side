import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import {howToWorks as data} from '../../../utils/HowToWorksData'
import signUp from '../../../images/avat.png'
import login from '../../../images/add-user.png'
import './HowItWorks.css'

const HowItWorks = () => {
    return (
        <section className="section-3">
            <h1 className='section-3__title pb-5'>HOW IT WORKS ?</h1>

            <div>
                <VerticalTimeline>
                    {
                        data.map(el => {
                            let isSIgnUp = el.title === 'Sign Up';

                            return (
                                <VerticalTimelineElement
                                    key={el.id}
                                    date={new Date().toDateString()}
                                    dateClassName="date"
                                    iconStyle={{backgroundColor: "tomato"}}
                                    icon={isSIgnUp ? 
                                    <img src={login} alt="" className="w-75 d-block mx-auto mt-1"/> : 
                                    <img src={signUp} alt="" className="w-75 d-block mx-auto mt-1"/>}
                                >
                                    <h6 className="section-3__cardTitle">{el.title}</h6>
                                    <p className="section-3__cardDescription">{el.description}</p>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>

        </section>
    );
};

export default HowItWorks;