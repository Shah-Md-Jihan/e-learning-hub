import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider';
import Image from 'react-bootstrap/Image';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, providerLogOut } = useContext(AuthContex);

    console.log(user?.displayName);

    const handleLogOut = () => {
        providerLogOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='text-decoration-none text-warning fs-2'>
                        E-Learning Hub BD.
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav>
                            <Link to="categories" className='text-decoration-none text-white fs-5 me-3'>
                                Categories
                            </Link>
                        </Nav>
                        <Nav>
                            {
                                user?.photoURL ?
                                    <Link to="/" className='text-decoration-none text-white fs-5 me-3' data-bs-toggle="tooltip" data-bs-placement="bottom" title={user?.displayName}>
                                        <Image src={user?.photoURL} style={{ height: '40px' }} roundedCircle></Image>
                                    </Link>
                                    :
                                    <Link to="/" className='text-decoration-none text-white fs-5 me-3' data-bs-toggle="tooltip" data-bs-placement="bottom" title={user?.displayName}>
                                        <FaUser></FaUser>
                                    </Link>

                            }
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <Link onClick={handleLogOut} className='text-decoration-none text-white fs-5 ms-4'>Logout</Link>
                                    :
                                    <Link to="/login" className='text-decoration-none text-white fs-5 ms-4'>
                                        Login
                                    </Link>
                            }

                        </Nav>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;