import React from 'react';
import './Login.css'

function Component2({ menu }) {
  // Dummy image URLs for menu items
  const menuImages = [
    '/Images/burger.jpeg', 
    '/Images/sandwich.jpeg',
    '/Images/salad.jpeg', 
  ];

  return (
    <div className="menu-container">
      <h2>Dinner Menu</h2>
      <div className="card-container">
        {menu.map((item, index) => (
          <div key={index} className="card">
            <img src={menuImages[index]} alt={item} />
            <div className="card-content">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component2;