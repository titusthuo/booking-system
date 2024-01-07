import React, { useState } from 'react';

const AuthForm = ({ onAuthSubmit, isRegistering }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input
    if (!username || !password || (isRegistering && !email)) {
      setError('All fields are required.');
      return;
    }

    // Clear previous errors
    setError(null);

    // Perform authentication logic
    onAuthSubmit({ username, password, email });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegistering && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
