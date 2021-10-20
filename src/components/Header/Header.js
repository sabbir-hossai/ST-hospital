import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

import './Header.css'

const Header = () => {
    const { users, logOut } = useFirebase();
    const clearUser = () => {
        localStorage.removeItem('user')
    }
    return (
        < >
            <Navbar className="navbar" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ST HOSPITAL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#services">Service</Nav.Link>
                            <Nav.Link href="/aboute">Aboute</Nav.Link>
                            <Nav.Link href="/healthblog">Health Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                user: {users.displayName}
                            </Nav.Link>
                            {
                                !users.email ? <Nav.Link href="/login">Log in</Nav.Link> : <Button variant="dark" onClick={logOut}>Log out</Button>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;