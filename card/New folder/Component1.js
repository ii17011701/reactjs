import React from 'react';
import { Link } from 'react-router-dom';
import Component2 from './Component2';
import Component3 from './Component3';

function Component1({ lunchMenu, dinnerMenu }) {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/lunch" className="nav-link">Lunch</Link>
          </li>
          <li className="nav-item">
            <Link to="/dinner" className="nav-link">Dinner</Link>
          </li>
        </ul>
      </nav>
   
      {/* Pass lunchMenu and dinnerMenu as props */}
      <Component2 menu={lunchMenu} />
      <Component3 menu={dinnerMenu} />
    </div>
  );
}

export default Component1;