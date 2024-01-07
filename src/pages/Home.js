import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="py-5 text-center">
      <Container>
        <h1 className="display-4 mb-4">Welcome to the Mega Kenyan House Booking System</h1>
        <p className="lead mb-5">
          Find the perfect accommodation for yourself and your family. Book now for an unforgettable experience.
        </p>
        <Row className="justify-content-center">
          <Col md="6">
            <Button variant="primary" as={Link} to="/menu" size="lg">
              Explore Houses
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
