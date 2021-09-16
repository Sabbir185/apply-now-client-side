import React from 'react';

const ApplicationCard = (props) => {
    console.log(props.application)

    return (
        <tr style={{cursor: 'pointer'}}>
            <td className="text-capitalize">{props.application.title}</td>
            <td>{props.application.user.name}</td>
            <td>{props.application.user.email}</td>
        </tr>
    );
};

export default ApplicationCard;