import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { useEffect } from 'react';


const CourseClass = () => {
    const sub_menus = useLoaderData();
    let cat_id;
    sub_menus.map(e => cat_id = e.category_id);

    const [categories, setCat] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/categories')
            .then(res => res.json())
            .then(data => setCat(data))
    }, []);

    const select_cat = categories.find(cat => cat._id === cat_id);

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
                                        sub_menus.map(sub_menu =>
                                            <ListGroup.Item key={sub_menu._id}>{sub_menu.sub_title}
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
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CourseClass;