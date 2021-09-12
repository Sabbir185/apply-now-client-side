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