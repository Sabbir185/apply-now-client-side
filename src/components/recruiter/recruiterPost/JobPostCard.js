import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { recentJobPost } from '../../../redux/actions/actions';
import './RecruiterPost.css'

const JobPostCard = (props) => {
    const {title, jobType, _id} = (props.data)
    const dispatch = useDispatch();
    const history = useHistory()
    const token = JSON.parse(localStorage.getItem('jwt'));

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`https://desolate-sands-39522.herokuapp.com/jobPost/${id}`, { headers:    {'Authorization': `Bearer ${token}`} });
            if(res.data){
                alert(res.data.status);
                history.push('/');
            }
        } catch (error) {
            alert(error.response.data.status)
        }
    }

    const passIdHandler = (id) => {
        dispatch(recentJobPost());
        history.push(`/view-details/${id}`);
    }

    return (
        <tr>
            <td onClick={() => passIdHandler(_id)} className="cursor-control">{title}</td>
            <td>{jobType}</td>
            <td>
                <button className="btn btn-info btn-sm d-inline-block me-2">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default JobPostCard;