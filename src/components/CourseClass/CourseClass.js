import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


const CourseClass = () => {
    const sub_menus = useLoaderData();


    return (
        <div className='my-5 mx-2'>
            <Row className="g-4 pb-5">
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title> Tutorial</Card.Title>
                            <Card>
                                <ListGroup>
                                    {
                                        sub_menus?.map(sub_menu =>
                                            <ListGroup.Item key={sub_menu?._id}>
                                                <Link to={`/categories/submenu/${sub_menu?._id}`}>{sub_menu?.sub_title}</Link>
                                            </ListGroup.Item>
                                        )
                                    }
                                </ListGroup>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={9}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Detail Tutorials</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Outlet></Outlet>
        </div>
    );
};

export default CourseClass;