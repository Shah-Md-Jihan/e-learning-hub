import React from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Home = () => {
  const teachers = useLoaderData();
  console.log(teachers);
  return (
    <div>
      <Slider></Slider>

      <Container className="mt-5">
        <h3 className="mb-5 fs-2 text-info">
          <span className="text-info fs-1 fw-bold">| </span>Our Instructors :
        </h3>
        <Row xs={1} md={4} className="g-4">
          {teachers.map((teacher) => (
            <Col key={teacher?.id}>
              <Card>
                <Card.Img style={{ height: "250px" }} variant="top" src={teacher?.img} />
                <Card.Body>
                  <Card.Title>{teacher?.name}</Card.Title>
                  <Card.Text>{teacher?.degree}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
