import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Profile from "./components/profile";
function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>

      <Route path="/form" element={<Profile/>} /> 
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
