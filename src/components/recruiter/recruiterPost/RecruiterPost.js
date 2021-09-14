import React from 'react';
import { useSelector } from 'react-redux';
import JobPostCard from './JobPostCard';

const RecruiterPost = () => {
    const recruiterData = useSelector((state) =>  state.recruiter );
    const jobPosted = recruiterData.data.jobPost;

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobPosted?.map(data => <JobPostCard key={data._id} data={data} />)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default RecruiterPost;