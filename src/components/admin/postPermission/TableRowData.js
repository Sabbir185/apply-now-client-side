import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TableRowData = (props) => {
    const {_id, company, country, title, isApproved} = props.jobData;

    const token = JSON.parse(localStorage.getItem('jwt'));

    // handle post approve
    const handleApprove = async (approve, id) => {
        try {
            const data = {
                isApproved: approve
            }
            const res = await axios.patch(`http://localhost:8080/jobPost/${id}`,data, {
                                    headers: {'Authorization': `Bearer ${token}`} });
            if(res.data) {
                toast.success("Approved!, Please refresh page..")
            }
        } catch (error) {
            toast.error("Failed to Approve..")
        }
    }

    // handle post delete
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/jobPost/${id}`, {
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
            <ToastContainer />
            <tr>
                <td>{`${isApproved}`}</td>
                <td>{company}</td>
                <td>{country}</td>
                <td>{title}</td>
                <td>
                    <button className="btn btn-success btn-sm me-2" onClick={()=>handleApprove(true, _id)}>Approved</button>

                    <button className="btn btn-danger btn-sm ms-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0" onClick={()=>handleDelete(_id)}>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default TableRowData;