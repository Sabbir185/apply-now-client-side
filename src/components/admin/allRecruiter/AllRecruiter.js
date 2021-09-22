import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableRowData from './TableRowData';

const AllRecruiter = () => {
    const [recruiterData, setRecruiterData] = useState([]);

    useEffect(() => {
        try {
            async function fetchData(){
                const res = await axios.get('http://localhost:8080/recruiter/')
                if(res.data){
                    setRecruiterData(res.data)
                }
            }
            fetchData()
        } catch (error) {
            alert('Failed to load data!');
        }
    },[])


    return (
        <section>
            <h6 className="text-success fw-bold">Total Recruiter : {recruiterData.totalRecruiter}</h6>

            <div>
                <Table striped bordered hover size="sm" responsive className="text-center">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Country</th>
                            <th>Job Posted</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recruiterData.user?.map(recruiter => <TableRowData data={recruiter} />)
                        }
                    </tbody>
                </Table>
            </div>

        </section>
    );
};

export default AllRecruiter;