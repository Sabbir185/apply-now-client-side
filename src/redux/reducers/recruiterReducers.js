// recruiter sign up reducer
const initialSignUpData = {
    status: '',
    token: '',
    signUpData: {}
}

export const recruiterSignUpReducer = (state=initialSignUpData, action) => {
    switch(action.type){
        case 'recruiter_signUp_data':
            return {
                ...state,
                signUpData: action.payload
            }

        default:
            return state;
    }
}


// recruiter login reducer
const initialLoginData = {
    status: false,
    token: false,
    loading: false,
    loginData: {},
    error: ''
}

export const recruiterLoginReducer = (state=initialLoginData, action) => {
    switch(action.type) {
        case 'recruiter_login_data':
            return {
                ...state,
                loginData: action.payload
            }

        case 'recruiter_error':
            return {
                ...state,
                loginData: {},
                error: action.payload
            }

        default:
            return state;
    }
}