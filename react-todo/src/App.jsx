import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
        <BrowserRouter>
      <Routes>

      <Route path="/list" element={<TodoList />} /> 
      </Routes>
      </BrowserRouter>
  
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
