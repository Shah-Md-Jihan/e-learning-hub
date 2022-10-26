import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <div>
            <h2>Terms & Conditions</h2>
            <p>Go back to <Link to="/register">Sign Up</Link></p>
        </div>
    );
};

export default TermsConditions;