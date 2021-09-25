import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cancel from '../../../images/cancel.png'
import './RecruiterProfile.css';

const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: "0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)"
    },
};
  
Modal.setAppElement('#root');

const RecruiterModal = ({modalIsOpen, closeModal, id}) => {
    const [imageData, setImageData] = React.useState(null)

    const handleImage = (e) => {
        e.preventDefault();
        setImageData(e.target.files[0]);
    }

    const onSubmit = async data => {
        data.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', imageData);

            const config = {
                Headers: {'content-type': 'multipart/from-data'}
            }
            const res = await axios.patch(`https://desolate-sands-39522.herokuapp.com/recruiter/update/${id}`, formData, config);

            if(res.data) {
                toast.success('Profile updated successFully!');
                setTimeout(() => {
                    window.location.reload();
                }, 3500);
            }
           

        } catch (error) {
            alert('Failed to update! try again..')
        }
        
    }


    return (
        <div>
            <ToastContainer autoClose={3200}/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h5 className="text-center text-success">Change Profile Picture</h5>
                <img onClick={closeModal} src={cancel} alt="" className="closeModal img-fluid"/>
                <form onSubmit={onSubmit}>
                    <label htmlFor="image" className="fst-italic mt-3">Image*</label>
                    <input type="file" onChange={handleImage} id="image" className="form-control"/>
                    <small className="text-center d-block text-secondary fst-italic">Image size upto 300 KB</small>

                    <button type="submit" className="btn search-button text-center d-block mx-auto mt-4" > &nbsp;&nbsp;&nbsp;&nbsp; Upload Image</button>
                </form>
            </Modal>
        </div>
    );
};

export default RecruiterModal;