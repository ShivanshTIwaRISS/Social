import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import PostDetail from "./pages/PostDetail";
import "./styles/Navbar.css";
import BottomNavBar from "./components/BottomNavBar"; // at the top


function App() {
  return (
    <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/feed" element={<Feed />} />
  </Routes>
  <BottomNavBar />
</Router>

  );
}

export default App;
