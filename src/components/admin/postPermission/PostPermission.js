import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { recentJobPost } from '../../../redux/actions/actions';
import TableRowData from './TableRowData';

const PostPermission = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(recentJobPost())
    },[dispatch])

    const data = useSelector(state => state.recentJob.recentJob )


    return (
        <section>
            <h6 className="text-success fw-bold">Total Post : {data.length}</h6>
            <div>
                <Table striped bordered hover size="sm" responsive className="text-center">
                    <thead>
                        <tr>
                            <th>Approved</th>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(recruiter => <TableRowData jobData={recruiter}/>)
                        }
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default PostPermission;