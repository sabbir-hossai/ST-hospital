import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import './Register.css';



const Register = () => {
    const { handelNameChange, handelarSignInWithEmailAndPassword, handelEmailChange, handelPasswordChange, error, setIsLoging, signInWithgmail, handelRegistation, setError, user } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';



    const handelEmailRegistation = () => {
        handelarSignInWithEmailAndPassword()
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    return (
        <div>
            <h1>Please log in</h1>
            <div>
                <Form className="form-container" onSubmit={handelarSignInWithEmailAndPassword}>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicName">

                            <Form.Control onBlur={handelNameChange} type="text" placeholder="Enter Your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control onChange={handelEmailChange} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={handelPasswordChange} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={handelEmailRegistation} variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
                <div>

                    <Link to="/login"><p>Do you have an account?</p></Link>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Do you have an account?" />
                </Form.Group> */}
                </div>

            </div>


        </div>
    );
};

export default Register;