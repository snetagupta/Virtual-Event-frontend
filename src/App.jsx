
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

const App =() =>{

  return(

    <BrowserRouter>
    <Routes>
      
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
    
    </Routes>
  </BrowserRouter>

  )
}

export default App
