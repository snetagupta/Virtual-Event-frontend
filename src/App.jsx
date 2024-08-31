
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Events from "./pages/Events";

const App =() =>{

  return(

    <BrowserRouter>
    <Routes>
      
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
    
    </Routes>
  </BrowserRouter>

  )
}

export default App
