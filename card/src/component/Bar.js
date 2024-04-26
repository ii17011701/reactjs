import React from 'react';
import { Link } from 'react-router-dom';
// import Breakfast from './Breakfast';
// import Dinner from './Dinner';
// import Lunch from './Lunch';
import './hi.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

// function Bar() { 
//     return (
      
//          <div>
//           <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#click-All">Cards</a>
//          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <Link to="/" class="nav-link active" aria-current="page" href="#">All</Link>
//             <Link to="/breakfast" class="nav-link" href="#">Breakfast</Link>
//             <Link to="/lunch" class="nav-link" href="#">Lunch</Link>
//             <Link to="/dinner" class="nav-link" href="#">Dinner</Link>
          
//             <Link to="/login" class="nav-link " href="#">login</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
  
    
//     </div>
//       );
//   }





function Bar() { 
  return (
      <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#click-All">Cards</a>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                          <Link to="/" className="nav-link active" aria-current="page">All</Link>
                          <Link to="/breakfast" className="nav-link">Breakfast</Link>
                          <Link to="/lunch" className="nav-link">Lunch</Link>
                          <Link to="/dinner" className="nav-link">Dinner</Link>
                      </div>
                  </div>
                  <div className="d-flex align-items-center"> {/* Flex container to align login button */}
                    <Link to="/login" className="nav-link"><button className='btn btn-outline-dark'>Login</button></Link>
                  </div>
              </div>
          </nav>
      </div>
  );
}






  
  export default Bar;