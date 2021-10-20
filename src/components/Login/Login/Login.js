import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    // hook form 



    // hook form end
    const { handelNameChange, handelEmailChange, handelPasswordChange, handelRegistation, error, signInWithGoogle, setIsLoging, signInWithgmail, handelarSignInWithEmailAndPassword, setError, password, user } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    // console.log(redirect_uri)


    const handelgoogleLoin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                localStorage.setItem("user", JSON.stringify(result.user));
                history.push(redirect_uri)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })

            .finally(() => {
                setIsLoging(false)
            })
    }
    const handelEmailLogin = () => {
        handelarSignInWithEmailAndPassword()
            .then(result => {
                console.log(result.user)
                localStorage.setItem("user", JSON.stringify(result.user));
                history.push(redirect_uri)
                setError('')
            })


            .finally(() => {
                setIsLoging(false)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div>
            <h1>Please log in</h1>
            <div>
                <Form onSubmit={handelarSignInWithEmailAndPassword} className="form-container">
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control onBlur={handelEmailChange} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={handelPasswordChange} type="password" placeholder="Password" />
                        </Form.Group>
                        <div>
                            <p>{error}</p>
                        </div>
                        <Button onClick={handelEmailLogin} variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
                <div>

                    <Link to="/register"><p>I don't have an account</p></Link>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Do you have an account?" />
                    </Form.Group> */}
                </div>

            </div>

            <div>----------------OR----------------</div>
            <Button onClick={handelgoogleLoin} variant="secondary">Login with google</Button>
        </div>
    );
};

export default Login;