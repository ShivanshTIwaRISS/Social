import React from "react";
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">SocialX</h1>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="nav-icons">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
