import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { recentJobPost } from '../../../redux/actions/actions';
import './RecentJob.css';

const RecentJob = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
       return state.recentJob.recentJob
    });

    console.log('outside :',data)
    
    useEffect(() => {
        dispatch((recentJobPost()));
    },[dispatch])

    return (
        <div className=''>
            <h5><span className="recent-title">Recently Added</span></h5>
        </div>
    );
};

export default RecentJob;