import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormikForm from "./components/RegistrationForm";
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path="/form" element={<FormikForm />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
