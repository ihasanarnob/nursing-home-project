import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand>Pills & Cure </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                    <Nav.Link as = {Link} to="/home">Home</Nav.Link>
                    <Nav.Link as = {Link} to="/services">Services</Nav.Link>
                    <Nav.Link as = {Link} to="/about">About</Nav.Link>
                    <Nav.Link as = {Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link as = {Link} to="/register">Register</Nav.Link>
                    {/* <Nav.Link as = {Link} to="/login">Log In </Nav.Link> */}
                    </Nav>

                    {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;