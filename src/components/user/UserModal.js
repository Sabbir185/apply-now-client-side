import React from 'react';
import Modal from 'react-modal';
import axios from 'axios'

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

const UserModal = ({modalIsOpen, closeModal, id}) => {
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
            const res = await axios.patch(`http://localhost:8080/user/update/${id}`, formData, config);

            console.log(res)

        } catch (error) {
            console.log(error.response.data)
        }
        
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h5 className="text-center text-success">Change Profile Picture</h5>
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

export default UserModal;