import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <Container className='blog_container mt-5'>
            <h3 className='mb-5 fs-2 text-info'><span className='text-info fs-1 fw-bold'>| </span>Frequently Asked Questions (FAQ) :</h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Who is this platform for?</Accordion.Header>
                    <Accordion.Body>
                        This platform is designed for beginner who wants starts their career in programming.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are the courses on this platform free of cost? </Accordion.Header>
                    <Accordion.Body>
                        On this platform courses, you can learn the beginning level of programming totally free of cost but if you want to learn the professional level of programming you have to spend the course fee.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Are the courses only for computer science background students?</Accordion.Header>
                    <Accordion.Body>
                        The courses on this platform are designed at the stage of beginning.That's why any background people if any people want to learn programming can.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>After completing the course, can we do freelancing?</Accordion.Header>
                    <Accordion.Body>
                        Our free courses will give you entry into programming. If you complete our premium course we hope that you will be ready to work as a junior developer or programmer in the online or offline job market.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Faq;