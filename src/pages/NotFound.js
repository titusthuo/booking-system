import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NotFound() {
  return (
    <div className="text-center">
      <h2 className="display-1">404 - Not Found</h2>
      <p className="lead">The page you are looking for does not exist.</p>
      <Link to="/">
        <Button variant="primary">Go to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
