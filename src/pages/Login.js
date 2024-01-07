import React, { useState, useEffect } from 'react';
import firebaseConfig from '../firebaseConfig';
import { Button, Form, Spinner } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Clean up loading state when component unmounts
    return () => setLoading(false);
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await firebaseConfig.auth.signInWithEmailAndPassword(email, password);
      // Handle successful login (redirect, etc)
    } catch (error) {
      console.error(error.message);
      // Handle login error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleLogin} disabled={loading}>
          {loading ? (
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="mr-2" />
          ) : null}
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
    </div>
  );
}

export default Login;
