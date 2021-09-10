import React from 'react';
import './RecentJob.css'
import icon from '../../../images/icons8-realtime-48.png';
import { useHistory } from 'react-router';

const RecentJobCard = (props) => {
    const {title, company, _id} = props.data;

    
    const history = useHistory();
    const passIdHandler = (id) => {
        history.push(`/view-details/${id}`);
    }

    return (
        <div className='row mb-3 main-recent' onClick={()=> passIdHandler(_id)}>
            <div className='col-2 main-recent__img' >
                <img src={icon} alt="" className="w-75 d-block mx-auto ms-3 mt-3"/>
            </div>
            <div className="col wrapping">
                <small className="title">{title}</small> <br />
                <small className="company">Offered : {company}</small>
            </div>
        </div>
    );
};

export default RecentJobCard;