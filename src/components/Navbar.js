import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/feed">Feed</Link> {/* Add this button */}
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
