import React from 'react';


function Breakfast({ menu }) {
  const menuImages = [
    "./img/idli.jpg",
    './img/dosa.jpg',
    './img/paddu.jpg',
    './img/puri.jpg',
    './img/uppma.jpg',
     ];

  return (
    
  <>
    <div className="menu-container">
      <h2>Breakfast Menu</h2>
      <div className="card-container">
        {menu.map((item, index) => (
          <div key={index} className="card">
            <img src={menuImages} alt={item} />
            <div className="card-content">{item}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Breakfast;