import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth'
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {

    const { user, signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation;
    const Redirect_uri = location.state?.from;


    const handelgoogleLoin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(Redirect_uri)
            })
    }
    return (
        <div>
            <h1>Please log in</h1>
            <Button onClick={handelgoogleLoin} variant="secondary">Secondary</Button>
        </div>
    );
};

export default Login;