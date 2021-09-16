import React from 'react';

const TotalApply = (props) => {
    const {title, company, country, createdAt, status} = props.data;
    
    return (
     
        <tr>
            <td className="text-capitalize">{title}</td>
            <td>{company}</td>
            <td className="text-capitalize">{country}</td>
            <td>{new Date(`${createdAt}`).toDateString()}</td>
            {
                status === 'received' ? 
                <td className="text-capitalize text-success">{status}</td> 
                :
                ( status === 'pending' ? <td className="text-capitalize text-primary">{status}</td> : <td className="text-capitalize text-danger">{status}</td> )
            }
            
        </tr>

    );
};

export default TotalApply;