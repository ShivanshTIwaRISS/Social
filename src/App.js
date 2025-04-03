import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import FeedPage from "./pages/Feed"; // Import Feed Page
import "./styles/Navbar.css"; // Import global styles

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<FeedPage />} /> {/* New Feed Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
