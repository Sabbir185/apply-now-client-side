import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { recentJobPost } from '../../../redux/actions/actions';
import newArrival from '../../../images/newArrival (2).png'
import './RecentJob.css';
import RecentJobCard from './RecentJobCard';


const RecentJob = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => {
       return state.recentJob.recentJob
    });

    const data = jobs.slice(0, 7);
    
    useEffect(() => {
        dispatch((recentJobPost()));
    },[dispatch])

    return (
        <div className='new-job'>
            <img src={newArrival} alt="" className='img-fluid w-75 d-block mx-auto'/>

            <div className="mt-3">
                {
                    data.map((info) => <RecentJobCard key={info._id} data={info}/> )
                }
            </div>
        </div>
    );
};

export default RecentJob;