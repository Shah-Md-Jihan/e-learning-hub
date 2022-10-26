import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider';


const Register = () => {

    const { providerRegister } = useContext(AuthContex);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
        providerRegister(email, password)
            .then((userData) => {
                const user = userData.user;
            })
            .catch(error => console.error(error))
        form.reset();
    }
    return (
        <div>
            <div className='w-25 mx-auto my-5'>
                <Card>
                    <Card.Body>
                        <h4 className='text-dark fs-5 text-center py-3'>SIGN UP</h4>
                        <Form onSubmit={handleRegister}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter name" required />
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
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="success" className='w-100 my-3' type="submit">
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