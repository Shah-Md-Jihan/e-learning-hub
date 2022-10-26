import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerGoogleLogin, providerEmailLogin } = useContext(AuthContex);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(e => console.error(e));
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        providerEmailLogin(email, password)
            .then(loginUserInfo => {
                const loggedUser = loginUserInfo.user;
            })
            .catch(error => console.error(error))
        form.reset();
    }
    return (
        <div className='w-25 mx-auto my-5'>
            <Card>
                <Card.Body>
                    <h4 className='text-dark fs-5 text-center py-3'>LOGIN</h4>
                    <Form onSubmit={handleEmailLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" className='w-100 my-3' type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className='text-center'>Or Login With</p>
                    <p className='text-center'>
                        <Button onClick={handleGoogleLogin} variant='outline-dark' size="lg" className='me-3'>
                            <span><FaGoogle></FaGoogle></span>
                        </Button>
                        <Button variant='outline-dark' size="lg" className='me-3'>
                            <span><FaGithub></FaGithub></span>
                        </Button>
                    </p>
                    <p>Need an account? Please <Link to="/register">Sign Up</Link></p>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Login;