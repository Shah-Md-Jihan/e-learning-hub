import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider';
import { useState } from 'react';


const Register = () => {

    const { providerRegister, providerUpdateProfile } = useContext(AuthContex);
    const [error, setError] = useState('');
    const [terms, setTerms] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
        providerRegister(email, password)
            .then((userData) => {
                const user = userData.user;
                handleUpdateProfile(name, image);
                setError('');
            })
            .catch(error => setError(error.message))
        form.reset();
    }

    const handleUpdateProfile = (name, image) => {
        const profile = {
            displayName: name,
            photoURL: image
        }
        providerUpdateProfile(profile)
            .then(() => {
                setError('')
            })
            .catch(error => setError(error.message))

    }

    const handleTerms = (e) => {
        setTerms(e.target.checked);
    }

    return (
        <div>
            <div className='w-25 mx-auto my-5'>
                <Card>
                    <Card.Body>
                        <h4 className='text-dark fs-5 text-center py-3'>SIGN UP</h4>
                        {
                            error && <p className='text-danger'>{error}</p>
                        }
                        <Form onSubmit={handleRegister}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control name="image" type="text" placeholder="Enter name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    onClick={handleTerms}
                                    label={<>Accept our <Link to="/terms">terms & conditions</Link></>} />
                            </Form.Group>
                            <Button
                                variant="success"
                                className='w-100 my-3'
                                disabled={!terms}
                                type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <p>Already Have an Account? Please <Link to="/login">Login</Link></p>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default Register;