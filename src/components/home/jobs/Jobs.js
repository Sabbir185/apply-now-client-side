import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllPost } from '../../../redux/actions/actions';
import MainNav from '../../shared/mainNav/MainNav';
import JobCard from '../jobCards/JobCards';
import arrowLeft from '../../../images/arrow (1).png'
import arrowRight from '../../../images/arrow (2).png'
import './Jobs.css'

const Jobs = () => {
    const dispatch = useDispatch();
    let count,totalPostCount;
    const data = useSelector((state) => {
        count = state.data.postedData.count;
        totalPostCount = state.data.postedData.postCount;
        return state.data.postedData.data;
    } );

    // restricted to next page
    const divid = totalPostCount / 3;
    const totalData = parseInt(divid) === divid ? divid -1 : Math.floor(divid);

    // next page
    const paginationPlus = () => {
      if(data.length > 0 && count <= totalData){
        count += 1;
        const payload = {
            title: data[0].title,
            jobType: data[0].jobType,
        }

        dispatch(getAllPost(payload, count))
      }
    }
    // previous page
    const paginationMinus = () => {
      if(count > 1){
        count -= 1;
        const payload = {
            title: data[0].title,
            jobType: data[0].jobType,
        }
        dispatch(getAllPost(payload, count))
      }
    }

    
    return (
        <div>
            <MainNav />
            
            {/* data display */}
            <section className="mt-5 job-posts">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-9 col-xlg-9">
                        <div className='display-control'>
                            {
                                data?.map((info) => <JobCard key={info._id} data={info} /> )
                            }
                        </div>
                        <div className="next-previous">
                            <img src={arrowLeft} alt="" srcset="" onClick={() => paginationMinus()} className="me-2"/>
                            <img src={arrowRight} alt="" srcset="" onClick={() => paginationPlus()} className="ms-2"/>
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