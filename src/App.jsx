import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import './App.css'
import RecipeId from './Components/RecipeId'
import Category from './Components/Category'
import SearchElement from './Components/SearchElement'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:idMeal' element={<RecipeId />} />
      <Route path='/category/:name' element={<Category />} />
      <Route path='/search/:searchTerm' element={<SearchElement />} />
    </Routes>
  )
}

export default App