import React from 'react';
import './hi.css';

function Breakfast({ menu }) {
  const menuImages = [
    './img/idli.jpg','./img/dosa.jpg', './img/paddu.jpg',
    './img/puri.jpg',
    './img/uppma.jpg',
     ];

  return (
    
  <>
    <div>
      <h2>Breakfast Menu</h2>
      <div>
        {menu.map((item, index) => (
          <div key={index}>
            <div className="card" style={{width: '13rem'}}>
            <img src={menuImages[index]} alt={item} class="card-img-top"/>
            </div>
            {/* <div>{item}</div> */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Breakfast;