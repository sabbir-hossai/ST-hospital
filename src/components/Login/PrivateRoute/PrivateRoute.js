import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    // const { users } = useAuth()
    // console.log(users)
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
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