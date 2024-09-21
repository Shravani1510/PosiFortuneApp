import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import './Style/NavBar.css'; // Import the CSS for styling


function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>DailyDoseOfJoy</h2> {/* Add your project name/logo here */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li> {/* Link to the Home page */}
        <li><Link to="/smile">Smile</Link></li> {/* Link to the Smile page */}
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
