import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Category.css";
import Button from "react-bootstrap/Button";

const Categories = () => {
  const categories = useLoaderData();
  return (
    <div className="mt-5">
      <Container>
        <h3 className="mb-5 fs-2 text-info">
          <span className="text-info fs-1 fw-bold">| </span>Select the language that you want to learn :
        </h3>
        <Row xs={1} md={3} className="g-4 text-center">
          {categories.map((category) => (
            <Col key={category._id}>
              <Card>
                <Card.Img variant="top" className="category_img p-3 w-full mx-auto" src={category.img} style={{ height: "280px" }} />
                <Card.Body>
                  <Card.Title className="fs-2">{category.title}</Card.Title>
                  <Card.Text className="fs-4 pb-2">{category.description}</Card.Text>
                  <Link to={`/categories/${category._id}`}>
                    <Button size="lg" variant="outline-dark" className="mb-3">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
