import jwt_decode from 'jwt-decode'

// store token into localStorage
export const setToken = (token) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(token));
    }
}

// check token is there or not
export const isToken = () => {
    if(typeof window === 'undefined') return false;
    if(localStorage.getItem('jwt')) {
        const { exp } = jwt_decode(JSON.parse(localStorage.getItem('jwt')));
        if(new Date().getTime() <= exp * 1000 ) {
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}