import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [name, setName] = useState('');

  
  const handleChange = useCallback(event => {
    setName(event.target.value);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange} 
        placeholder="Enter your name"
      />
      <p>Hello, {name ? name : 'Stranger'}!</p>
    </div>
  );
}

export default MyComponent;