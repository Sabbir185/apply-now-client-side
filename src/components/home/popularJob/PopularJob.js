import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { popularJobPosts } from '../../../redux/actions/actions';
import MainNav from '../../shared/mainNav/MainNav';
import JobCard from '../jobCards/JobCards';
import arrowLeft from '../../../images/arrow (1).png'
import arrowRight from '../../../images/arrow (2).png'
import './PopularJob.css'
import RecentJob from '../../shared/recentJobSidebar/RecentJob';

const PopularJob = () => {
    const dispatch = useDispatch();

    let count,totalPostCount ;
    // data load from redux
    const data = useSelector((state) => {
        count = state.data.postedData.count;
        totalPostCount = state.data.postedData.postCount;
        return state.data.postedData.data;
    } );

    // restricted to next page
    const divided = totalPostCount / 3;
    const totalData = parseInt(divided) === divided ? divided - 1 : Math.floor(divided);

    // next page for popular keyword
    const paginationMinusKeyword = () => {
        if(count > 1){
            count -= 1;
            const payload = {
                page: count,
                limit: 3,
            }
    
            dispatch(popularJobPosts(data[0].title, payload));
        }
    }

    // previous page for popular keyword
    const paginationPlusKeyword = () => {
        if(data.length > 0 && count <= totalData){
            count += 1;
            const payload = {
                page: count,
                limit: 3,
            }
    
            dispatch(popularJobPosts(data[0].title, payload));
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
                            <img src={arrowLeft} alt="" onClick={() => paginationMinusKeyword()} className="me-2"/>
                            <img src={arrowRight} alt="" onClick={() => paginationPlusKeyword()} className="ms-2"/>
                        </div>
                   </div>

                    <div className="col">
                        <RecentJob />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PopularJob;
