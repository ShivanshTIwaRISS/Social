import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Camera } from "lucide-react"; // modern icons
import "../styles/BottomNavBar.css";

const BottomNavBar = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-icon"><Home size={24} /></Link>
      <Link to="/feed" className="nav-icon"><Camera size={24} /></Link>
      <Link to="/profile" className="nav-icon"><User size={24} /></Link>
    </div>
  );
};

export default BottomNavBar;
