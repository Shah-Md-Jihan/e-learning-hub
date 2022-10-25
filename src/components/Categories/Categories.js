import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Category.css'

const Categories = () => {
    const categories = useLoaderData();
    return (
        <div className='mt-5'>
            <Container>
                <h3 className='mb-5 fs-2 text-info'><span className='text-info fs-1 fw-bold'>| </span>Select the language that you want to learn :</h3>
                <Row xs={1} md={2} className="g-4 text-center">
                    {categories.map(category => <Col key={category._id}>
                        <Card>
                            <Card.Img variant="top" className='category_img p-5 w-75 mx-auto' src={category.img} />
                            <Card.Body>
                                <Card.Title className='fs-2'>{category.title}</Card.Title>
                                <Card.Text className='fs-4 pb-5'>
                                    {category.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Categories;