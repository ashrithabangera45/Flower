import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Products from './pages/Products'
import FilterProduct from './pages/FilterProduct'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/Beauty-product/:mybeauty' element={<FilterProduct />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
