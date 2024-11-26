import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from '/components/RecipeDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesList from './components/Favoriteslist'
import RecommendationsList from './components/RecommendationsList'

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
            <Route path="/details" element={<RecipeDetails />} /> 
            <Route path="/favorites" element={<FavoritesList />} /> 
            <Route path="/recommendations" element={<RecommendationsList />} /> 
            

             
          </Routes>
       
      </div>
      </div>

      
     
    </BrowserRouter>
    </>
  )
}

export default App
