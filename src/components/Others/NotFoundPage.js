import React from 'react';
import Card from 'react-bootstrap/Card';


const NotFoundPage = () => {
    return (
        <div className='mt-5 pt-5'>
            <Card className="text-center w-50 mx-auto" style={{ height: '300px' }}>

                <Card.Body className='d-flex align-items-center justify-content-center'>
                    <div>
                        <Card.Title className='fs-2 text-danger'>Opps!</Card.Title>
                        <Card.Text className='fs-1'>
                            Not Found.
                        </Card.Text>
                    </div>
                </Card.Body>

            </Card>
        </div>
    );
};

export default NotFoundPage;