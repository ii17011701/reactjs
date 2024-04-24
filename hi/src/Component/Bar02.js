import React from 'react';
import { Link } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min';
import '/node_modules/bootstrap/dist/js/jquery.slim.min';
import '/node_modules/bootstrap/dist/js/popper.min';
function Bar02() { 
  return (
      <div>
          {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
              
                  <a className="navbar-brand" href="#hi/hello">Cards</a>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                      <li class="nav-item">
                          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                          </li>
                          <Link to="/todo" className="nav-link">Todo</Link>
                          <li class="nav-item">
                          <Link to="/quiz" className="nav-link">Quiz</Link>
                          </li>
                          <li class="nav-item">
                          <Link to="/module" className="nav-link">Module</Link>
                          </li>
                      </div>

                  </div>
            
          </nav> */}








<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#hi">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <small className="navbar-toggler-icon"></small>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
      </li>


      <li className="nav-item">
      <Link to="/todo" className="nav-link">Todo</Link>
      </li>

      <li class="nav-item">
      <Link to="/quiz" className="nav-link">Quiz</Link>
      </li>

      <li class="nav-item">
      <Link to="/module" className="nav-link">Module</Link>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#hi" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#hi">Action</a>
          <a class="dropdown-item" href="#hi">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#hi">Something else here</a>
        </div>
      </li>



      
    </ul>
  </div>
</nav> 










      </div>
  );
}

  export default Bar02;