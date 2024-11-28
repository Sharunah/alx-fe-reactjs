import PostsComponent from './components/PostsComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path="/posts" element={<PostsComponent />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
