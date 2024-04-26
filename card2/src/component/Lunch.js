
import React from 'react';

function Lunch({ menu }) {
  // Dummy image URLs for menu items
  const menuImages = [
    './img/Frice.jpg',
   './img/chapati.jpg',
   './img/colorRice.jpg',
   './img/pallav.jpg',
   './img/pallav2.jpg',
   './img/pallav3.jpg',
   './img/rice.jpg',
   './img/riceAndsam.jpg',
   './img/roti.jpg',
   './img/rice2.heic',
     
   
   // '/Images/burger.jpeg', 
   // '/Images/sandwich.jpeg',
   // '/Images/salad.jpeg', 
     ];

  return (
    <>
   
    <div className="menu-container">
      <h2>Lunch Menu</h2>
      <div className="card-container">
        {menu.map((item, index) => (
          <div key={index} className="card">
            <img src={menuImages[index]} alt={item} />
            <div className="card-content">{item}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Lunch;
    