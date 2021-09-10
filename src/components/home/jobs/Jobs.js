import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllPost } from '../../../redux/actions/actions';
import MainNav from '../../shared/mainNav/MainNav';
import JobCard from '../jobCards/JobCards';
import arrowLeft from '../../../images/arrow (1).png'
import arrowRight from '../../../images/arrow (2).png'
import './Jobs.css'
import RecentJob from '../../shared/recentJobSidebar/RecentJob';

const Jobs = () => {
    const dispatch = useDispatch();

    let count,totalPostCount;
    // data load from redux
    const data = useSelector((state) => {
        count = state.data.postedData.count;
        totalPostCount = state.data.postedData.postCount;
        return state.data.postedData.data;
    } );

    // restricted to next page
    const divided = totalPostCount / 3;
    const totalData = parseInt(divided) === divided ? divided -1 : Math.floor(divided);


    // next page for searching
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
    // previous page for searching
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
                    <div className="col-sm-12 col-md-8 col-lg-9 col-xlg-9 card-style">
                        <div className='display-control'>
                            {
                                data?.map((info) => <JobCard key={info._id} data={info} /> )
                            }
                        </div>
                                               
                        <div className="next-previous mt-3">
                            <img src={arrowLeft} alt=""  onClick={() => paginationMinus()} className="me-2"/>
                            <img src={arrowRight} alt=""  onClick={() => paginationPlus()} className="ms-2"/>
                        </div>
                   </div>

                    <div className="col ms-2">
                        <RecentJob />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Jobs;