import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {

 const {handleEmail,handlePassword,handleSignUp,error,signInUsingGoogle,handleName} = useFirebase();

    return (
        <div className="container">
            <h2>Please Sign Up</h2>
        <Form onSubmit={handleSignUp} className=" mx-auto">
            <Form.Label>Username</Form.Label>
            <Form.Control onBlur={handleName} type="inputName" placeholder="Enter name " />
            <br />
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
                <Form.Check type="checkbox" label="Already Signed Up? " />
            </Form.Group>
            <div>  
            <h6 className="text-danger p-2"> {error} </h6>
             </div>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
            <br /><br />
        <div mt-5>
            <h5>Sign up with Google </h5>
            <Button onClick={signInUsingGoogle} variant="primary" type="submit">Sign Up with Google </Button>
        </div>
        </div>
    );
};

export default Register;