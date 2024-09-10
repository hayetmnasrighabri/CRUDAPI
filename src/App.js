import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './pages/AddProduct'
import ProductsDetails from './pages/ProductsDetails'
function App() {
  return (
    <div>
      <NavBar/>
      <div className='row'>
        <div className='col-2 sidebar'>
        <SideBar/>
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='Products' element={<Products/>}/>
            <Route path='Products/Add' element={<AddProduct/>} />
            <Route path='product/:productId' element={<ProductsDetails/>}/>  
          </Routes>
        </div>
      </div>
      
    </div>
  )
}

export default App
