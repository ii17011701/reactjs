import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/another-route');
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={handleClick}>Go to Another Route</button>
    </div>
  );
};

export default Home;