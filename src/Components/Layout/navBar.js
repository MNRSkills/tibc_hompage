import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">LOGO</div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/features'>Features</Link>
        <Link to='/music'>Music</Link>
        <Link to='/community'>Community</Link>
        <Link to='/store'>Store</Link>
        <Link to='/about-us'>About</Link>
      </div>
      <div>
        <h2>The Interactive Broadcat Company</h2>

        login sign-up
        {/* subtitle */}
        
      </div>
    </div>
  );
};

export default Navbar;
