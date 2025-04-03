import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignInAlt, FaFire } from "react-icons/fa"; // Import icons
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        <FaHome /> Home
      </Link>
      <Link to="/feed" className="nav-item">
        <FaFire /> Feed {/* Fire icon for trending feed */}
      </Link>
      <Link to="/profile" className="nav-item">
        <FaUser /> Profile
      </Link>
      <Link to="/login" className="nav-item">
        <FaSignInAlt /> Login
      </Link>
    </nav>
  );
};

export default Navbar;
