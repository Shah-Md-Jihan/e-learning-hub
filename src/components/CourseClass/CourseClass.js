import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';


const CourseClass = () => {
    const sub_menus = useLoaderData();
    const showDetail = (heading, detail_data) => {
        const title = document.getElementById('title');
        const detail = document.getElementById('detail');
        title.innerText = heading;
        detail.innerText = detail_data;
    }


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
                                                <Link onClick={() => showDetail(sub_menu?.sub_title, sub_menu?.details)}
                                                    className='text-decoration-none text-dark'>
                                                    {sub_menu?.sub_title}
                                                </Link>
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
                            <h1 className='text-center pb-5 text-info'>Tutorial Board</h1>
                            <h3 id='title'></h3>
                            <p id='detail'></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Outlet></Outlet>
        </div>
    );
};

export default CourseClass;