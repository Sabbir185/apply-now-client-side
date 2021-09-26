import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";
import { isToken } from '../../utils/auth'


const PrivateRoute = ({ children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isToken() ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;