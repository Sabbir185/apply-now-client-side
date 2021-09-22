import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableRowData = (props) => {
    const {_id, email, name, username, company, country} = (props.data);
    const totalJobPosted = (props.data.jobPost);

    const token = JSON.parse(localStorage.getItem('jwt'));

    // handle user delete
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/recruiter/${id}`, {
                                    headers: {'Authorization': `Bearer ${token}`} });
            if(res.data) {
                toast.warning("Deleted!, Please refresh page..")
            }
        } catch (error) {
            toast.error("Failed to delete..")
        }
    }


    return (
        <>
            <ToastContainer position="top-center" autoClose={2000}/>
            <tr>
                <td>{username}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{company}</td>
                <td>{country}</td>
                <td>
                    {
                        totalJobPosted.length ? totalJobPosted.length : '0'
                    }
                </td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(_id)}>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default TableRowData;