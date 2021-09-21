import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: `${"0 0.25em 0.5em 0 rgba(0, 0, 0, 0.2), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.1)"}`,
    width: "50%",
    textAlign: 'center'
  },
};

Modal.setAppElement('#root');

// name capitalize fixed
const capitalWord = (word='') => {
    const str = word;
    const capitalForm = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalForm;
}


const PostDetailsModal = (props) => {
    const modalIsOpen = props.modalIsOpen;
    const closeModal = props.closeModal;
    const data = props.data;
    const { title, company, createdAt, description, jobType, salary, country} = data;
    const date = new Date(createdAt);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className="btn btn-success btn-sm fw-bold">close</button>
                <div>
                    <h5 className="mt-4">Job Title : {title.toUpperCase()}</h5>
                    <small>published date: {date.toDateString()}</small>
                    <hr />
                    <h6>Job Descriptions</h6>
                    <p className="mt-2">{description}</p> 
                    <hr />
                    <h6>Job Type : {capitalWord(jobType)}</h6>
                    <h6>Company : {company}</h6>
                    <h6>Salary Range : {salary}</h6>
                    <h6>Country : {country.length<=3 ? country.toUpperCase() : capitalWord(country)}</h6>
                </div>
            </Modal>
        </div>
    );
};

export default PostDetailsModal;