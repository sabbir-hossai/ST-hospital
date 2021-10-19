import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    const { users } = useAuth()
    console.log(users)

    return (
        <Route
            {...rest}
            render={({ location }) => users.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />

            }
        />
    );
};

export default PrivateRoute;