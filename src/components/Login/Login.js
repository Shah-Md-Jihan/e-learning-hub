import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {
        providerGoogleLogin,
        providerGithubLogin,
        providerEmailLogin
    } = useContext(AuthContex);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';



    const handleGoogleLogin = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result?.user;
                navigate(from, { replace: true });
                setError('');
            })
            .catch(e => setError(e));
    }

    const handleGithubLogin = () => {
        providerGithubLogin(githubProvider)
            .then(result => {
                const user = result?.user;
                navigate(from, { replace: true });
                setError('');
            })
            .catch(error => setError(error))
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        providerEmailLogin(email, password)
            .then(loginUserInfo => {
                const loggedUser = loginUserInfo.user;
                navigate(from, { replace: true });
                setError('');
            })
            .catch(error => setError(error.message))
        form.reset();
    }
    return (
        <div className='w-25 mx-auto my-5'>
            <Card>
                <Card.Body>
                    <h4 className='text-dark fs-5 text-center py-3'>LOGIN</h4>
                    {
                        error && <p className='text-danger'>{error}</p>
                    }
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
                        <Button onClick={handleGithubLogin} variant='outline-dark' size="lg" className='me-3'>
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