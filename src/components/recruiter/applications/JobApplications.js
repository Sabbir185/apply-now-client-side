import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'
import ApplicationCard from '../applicationCard/ApplicationCard';
import { Table } from 'react-bootstrap';

const JobApplications = () => {
    const [userApplications, setUserApplications] = useState([]);

    const { id } = jwt_decode(JSON.parse(localStorage.getItem('jwt')));

    useEffect( () => {
        try {
            const recruiterId = {recruiterId: id}
            fetch(`https://desolate-sands-39522.herokuapp.com/application/findByRecruiterId`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(recruiterId)
            })
            .then(res => res.json())
            .then(data => setUserApplications(data.applications))

        } catch (error) {
            alert(error);
        }
    },[id])


    return (
        <div>
            <h6 className="fw-bold">Total Application received : <span className="text-success fw-bold">{userApplications.length}</span></h6>

            <div className="mt-3">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Position Name</th>
                            <th>Applicant Resume</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
        
                        {
                            userApplications?.map(application => <ApplicationCard key={application._id} application={application}/>)
                        }
                        
                    </tbody>
                </Table>
                
            </div>
        </div>
    );
};

export default JobApplications;