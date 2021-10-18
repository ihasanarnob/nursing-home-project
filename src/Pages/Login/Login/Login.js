import React from 'react';
import { Button,Form } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {user,handleEmail,handlePassword,createNewUser,error} = useFirebase();
    console.log(user);

    return (
        <div className="container">
            <h2>Log In Here</h2>
            <Form onSubmit={createNewUser} className="mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Visit First? " />
            </Form.Group>
            <div>  
            <h6 className="text-danger p-2"> {error} </h6>
             </div>
            <Button variant="primary" type="submit">
                Log In 
            </Button>
            </Form>
        </div>
    );
};

export default Login;