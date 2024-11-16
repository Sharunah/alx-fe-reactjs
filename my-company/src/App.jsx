import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div>
      <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/contact" element={<Contact />} />  
            <Route path="/services" element={<Services />} />  
          </Routes>
       
      </div>
      </div>

      
     
    </BrowserRouter>
  )
}

export default App
