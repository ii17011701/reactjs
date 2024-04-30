 
import React, { useRef, useState } from 'react';

function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // Validate username and password
    if (!username || !password) {
      setError('Please enter both username and password.');
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
    } else {
      // Clear error and submit form
      setError('');
      // Submit logic here
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" ref={usernameRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;