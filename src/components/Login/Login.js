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
    const { providerGoogleLogin } = useContext(AuthContex);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(e => console.error(e));
    }
    return (
        <div className='w-25 mx-auto my-5'>
            <Card>
                <Card.Body>
                    <h4 className='text-dark fs-5 text-center py-3'>LOGIN</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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
                    <p>Need an account? Please <Link>Sign Up</Link></p>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Login;