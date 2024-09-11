import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './pages/AddProduct'
import ProductsDetails from './pages/ProductsDetails'
import EditProduct from './pages/EditProduct'
import Categories from './pages/Categories'
import CategoryDetails from './pages/CategoryDetails'
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
            <Route path='/' element={<Home/>} />
            <Route path='products' element={<Products/>}/>
             <Route path='categories' element={<Categories/>} />
            <Route path='products/Add' element={<AddProduct/>}/>
            <Route path='product/:productId' element={<ProductsDetails/>}/>  
            <Route path='products/Edit' element={<EditProduct/>} />
            <Route path='category/:index' element={<CategoryDetails/>} />
            
          </Routes>
        </div>
      </div>
      
    </div>
  )
}

export default App
