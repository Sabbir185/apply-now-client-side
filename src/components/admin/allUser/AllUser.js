import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableRowData from './TableRowData';

const AllUser = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        try {
            async function fetchData(){
                const res = await axios.get('http://localhost:8080/user/getAll')
                if(res.data){
                    setUserData(res.data)
                }
            }
            fetchData()
        } catch (error) {
            alert('Failed to load data!');
        }
    },[])
 

    return (
        <section>
            <h6 className="text-success fw-bold">Total user : {userData.totalUser}</h6>

            <div>
                <Table striped bordered hover size="sm" responsive className="text-center">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job Applied</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.user?.map(user => <TableRowData userData={user} />)
                        }
                    </tbody>
                </Table>
            </div>

        </section>
    );
};

export default AllUser;