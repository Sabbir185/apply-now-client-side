import React from 'react';
import { useSelector } from 'react-redux';
import MainNav from '../../shared/mainNav/MainNav';
import JobCard from '../jobCards/JobCards';
import './Jobs.css'

const Jobs = () => {
    const data = useSelector((state) => state.data.postedData );

    return (
        <div>
            <MainNav />
            
            {/* data display */}
            <section className="mt-5 job-posts">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-9 col-xlg-9">
                        <div className='display-control'>
                            {
                                data.map((info) => <JobCard key={info._id} data={info} /> )
                            }
                        </div>
                    </div>
                    <div className="col">
                        <h4>Popular Jobs</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem recusandae ex sunt sint maxime, iure ea qui doloribus sit aperiam debitis dignissimos est impedit totam quae. Voluptate rem, consectetur explicabo incidunt voluptas ipsa! Totam autem eius quam sequi dolorum molestias voluptas, natus perspiciatis ipsum ad laudantium facere a fugit.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Jobs;