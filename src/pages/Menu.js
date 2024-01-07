
import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const apartments = require('../images/apartments.jpg').default;
const house1 = require('../images/house1.jpg').default;
const house2 = require('../images/house2.png').default;
const house3 = require('../images/house3.jpg').default;
const house4 = require('../images/house4.jpg').default;

const menuItems = [
  {
    id: 1,
    name: 'House 1',
    description: 'Description for House 1',
    price: 100,
    category: 'all',
  },
  {
    id: 2,
    name: 'House 2',
    description: 'Description for House 2',
    price: 120,
    category: 'all',
  },
  // Add more menu items as needed
];

const categoryImages = {
  all: [apartments, house1, house2, house3, house4],
  standard: [], 
  deluxe: [],
  // Add more categories and images as needed
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [loading, setLoading] = useState(false);

  const filterMenu = async (category) => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    setSelectedCategory(category);
    setSelectedHouse(null);

    setLoading(false);
  };

  const handleBooking = () => {
    if (selectedHouse) {

      alert(`Booking ${selectedHouse.name} for $${selectedHouse.price} per night`);
    } else {
      alert('Please select a house before booking.');
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">Accommodation Options</h2>
      <div className="text-center mb-4 bg-primary d-flex justify-content-center">
        <Button
          variant="outline-primary"
          onClick={() => filterMenu('all')}
          className={`mx-2 ${selectedCategory === 'all' ? 'active' : ''}`}
          disabled={loading}
        >
          All
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => filterMenu('standard')}
          className={`mx-2 ${selectedCategory === 'standard' ? 'active' : ''}`}
          disabled={loading}
        >
          Standard
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => filterMenu('deluxe')}
          className={`mx-2 ${selectedCategory === 'deluxe' ? 'active' : ''}`}
          disabled={loading}
        >
          Deluxe
        </Button>
        {/* Add more categories as needed */}
      </div>
      <Row>
        {menuItems
          .filter((item) => selectedCategory === 'all' || item.category === selectedCategory)
          .map((item) => (
            <Col key={item.id} md="4" className="mb-4">
              <Card
                onClick={() => setSelectedHouse(item)}
                className={`cursor-pointer ${selectedHouse === item ? 'border-primary' : ''}`}
              >
                <Card.Img variant="top" src={categoryImages[selectedCategory][item.id - 1]} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>Price: ${item.price} per night</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      {selectedHouse && (
        <div className="text-center my-4">
          <h3>Selected House: {selectedHouse.name}</h3>
          <p>{selectedHouse.description}</p>
          <p>Price: ${selectedHouse.price} per night</p>
          <Button
            variant="primary"
            onClick={handleBooking}
            className="w-50"
            style={{ backgroundColor: '#007bff' }}
            disabled={loading}
          >
            {loading ? 'Booking...' : 'Book Now'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Menu;
