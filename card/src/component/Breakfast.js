import React from 'react';
import './hi.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// function Breakfast({ menu }) {
//   const menuImages = [
//     './img/idli.jpg','./img/dosa.jpg', './img/paddu.jpg',
//     './img/puri.jpg',
//     './img/uppma.jpg',
//      ];

//   return (
    
//   <>
//     <div>
//       <h2>Breakfast Menu</h2>
//       <div>
//         {menu.map((item, index) => (
//           <div className="container" key={index}>
//             <div className="row">
//               <div className="col-sm-3">
                
//           {/* <div key={index}></div> */}
//             <div className="card" style={{width: '13rem'}}>
//             <img src={menuImages[index]} alt={item} class="card-img-top"/>
//             </div>
//             <div>{item}</div>
          
          
//           </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }





function Breakfast({ menu }) {
  const menuImages = [
    './img/idli.jpg','./img/dosa.jpg', './img/paddu.jpg',
    './img/puri.jpg', './img/uppma.jpg',
  ];

  return (
    <>
      <div>
        <h2>Breakfast Menu</h2>
        <div className="container">
          <div className="row">
            {menu.map((item, index) => (
              <div key={index} className="col-sm-3">
                <div className="card" style={{ width: '13rem' }}>
                  <img src={menuImages[index]} alt={item} className="card-img-top" />
                  <div className="card-body">
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

export default Breakfast;