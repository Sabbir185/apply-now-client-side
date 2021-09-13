import axios from "axios"

// recruiter sign up data
export const recruiterSignUpData = ( payload ) => {
    return {
        type: 'recruiter_signUp_data',
        payload
    }
}


//recruiter login data 
export const recruiterLoginAction = ( payload ) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:8080/recruiter/login', payload);

            dispatch({
                type: 'recruiter_login_data',
                payload: response.data
            })
            
        } catch (error) {
            dispatch({
                type: 'recruiter_error',
                payload: error.response.data
            })
        }
    }
}