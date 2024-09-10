import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
function ProductsDetails() {
    const params= useParams()
    const productId = params.productId

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(products=>setProducts(products))
    },[])
  return (
    <div>
      <h1>ProductDetails**{productId}**</h1>
      <Product products={products}/>
    </div>
  )
}

export default ProductsDetails
