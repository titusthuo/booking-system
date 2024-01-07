import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import firebaseConfig from '../firebaseConfig';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await firebaseConfig.auth.createUserWithEmailAndPassword(email, password);
      // Handle successful registration (redirect, etc)
    } catch (error) {
      console.error(error.message);
      // Handle registration error
    }
  };

  return (
    <div className="text-center">
      <h2 className="mb-4">Register</h2>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleRegister}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
