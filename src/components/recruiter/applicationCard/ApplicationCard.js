import axios from 'axios';
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ApplicationCard = (props) => {
    console.log(props.application)
    const {title, status, userCV, _id} = (props.application);

    // patch status
    const handleStatus = async (status, id) => {
        try{
            const data = {status, _id: id};
            const res = await axios.patch('http://localhost:8080/application/statusUpdate', data);
            if(res.data){
                alert("Action updated!");
            }

        }catch(err){
            console.log(err.response.data)
        }

    }

    return (
        <tr style={{cursor: 'pointer'}}>
            <td className="text-capitalize">{title}</td>
            <td>
                <a href={userCV} target="_blank" rel="noreferrer" className="fw-bold">
                resume view </a>
            </td>
            <td>
                <DropdownButton id="dropdown-basic-button" title={status} variant='secondary' size="sm">
                    <Dropdown.Item onClick={() => handleStatus('receive', _id)} className="text-success">receive</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleStatus('reject', _id)} className="text-danger">reject</Dropdown.Item>
                </DropdownButton>
            </td>
        </tr>
    );
};

export default ApplicationCard;