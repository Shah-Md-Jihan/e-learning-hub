import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <Container>
            <h2>Terms & Conditions</h2>
            <p>Go back to <Link to="/register">Sign Up</Link></p>
        </Container>
    );
};

export default TermsConditions;