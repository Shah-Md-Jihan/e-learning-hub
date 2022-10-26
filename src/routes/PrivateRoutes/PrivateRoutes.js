import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContex);
    const location = useLocation();

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center'>
            <div className='w-25 h-25 mt-5 pt-5'>
                <Spinner animation="border" variant="info" />
            </div>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoutes;