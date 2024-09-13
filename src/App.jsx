import React from 'react'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'
import { Routes , Route } from 'react-router-dom'
import ProductsDetils from './components/ProductsDetils.jsx'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/Products' element={<Products />}></Route>
      <Route path='/detils/:ProdID' element={<ProductsDetils />}></Route>
    </Routes>
      
    </>
  )
}
