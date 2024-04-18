import React from 'react';
import { Link } from 'react-router-dom';
// import Breakfast from './Breakfast';
// import Dinner from './Dinner';
// import Lunch from './Lunch';
import './hi.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function Bar() { 
    return (
      
         <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#click-All">Cards</a>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" class="nav-link active" aria-current="page" href="#">All</Link>
            <Link to="/breakfast" class="nav-link" href="#">Breakfast</Link>
            <Link to="/lunch" class="nav-link" href="#">Lunch</Link>
            <Link to="/dinner" class="nav-link" href="#">Dinner</Link>
          
            <Link to="/login" class="nav-link " href="#">login</Link>
          </div>
        </div>
      </div>
    </nav>
  
    
    </div>
      );
  }
  
  export default Bar;