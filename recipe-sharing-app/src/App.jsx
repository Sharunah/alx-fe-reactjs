import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div>
      <Routes>
            
            <Route path="/list" element={<RecipeList />} />  
            <Route path="/form" element={<AddRecipeForm />} />  
             
          </Routes>
       
      </div>
      </div>

      
     
    </BrowserRouter>
    </>
  )
}

export default App
