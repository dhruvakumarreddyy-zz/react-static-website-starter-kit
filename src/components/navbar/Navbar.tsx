import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h3>logo</h3>
      <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </nav>

  )
}

export default Navbar
