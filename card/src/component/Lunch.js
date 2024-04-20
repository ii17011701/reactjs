
import React from 'react';
import './hi.css';
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
   
   <div>
      <h2>Lunch Menu</h2>
      <div className="container">
          <div className="row">
   
        {menu.map((item, index) => (
          <div key={index} className="col-sm-3">
 <div className="card" style={{width: '13rem'}}>
          <img src={menuImages[index]} alt={item} className='card-img-top' />
  <div className='card-body'>
        <h5 className="card-title"><center>{item}</center></h5>
        </div>
          </div> 
          </div>
         
        ))}
        </div>
        </div>
    </div>
   
    </>
  );
}

export default Lunch;
    