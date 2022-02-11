import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/music">Music</Link>
        <Link to="/community">Community</Link>
        <Link to="/stores">Store</Link>
        <Link to="/about-us">About</Link>
    </div>
  )
}

export default Navbar