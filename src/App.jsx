import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LiveCard from "./components/LiveCard";
import Events from "./pages/Events";
import EventContact from "./components/EventContact";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event" element={<Events/>} />
        <Route path="/contact" element={<EventContact/>} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
