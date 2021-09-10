import React from 'react';
import MainNav from '../mainNav/MainNav';

const NoMatch = () => {
    return (
        <div>
            <MainNav />
            <h3 className="text-center mt-5 fw-bold fst-italic text-danger">Not Found, 404 !</h3>
        </div>
    );
};

export default NoMatch;