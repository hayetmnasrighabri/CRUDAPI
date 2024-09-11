import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CategoryDetails() {
    const params = useParams()
    const categoryName = params.index
   const [category, setCategory]=useState([])
   const [products, setProducts]= useState([])
   useEffect(()=>{
    console.log("Category Index:", categoryName)
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then(res=>res.json())
    .then((data)=> {setProducts(data)
    console.log("Fetched products:", data)
})
},[categoryName])
  return (
    <div>
      <h1>CategoryDetails {categoryName}</h1>
      {products.length>0 ?
      <table className='table'>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product)=>(
               <tr key={product.id}>
                <td>{product.id}</td>
               <td>{product.title}</td>
               <td>{product.description.slice(0, 20)}...</td>
               <td>{product.price} $</td>
              </tr>
            ))}
            
        </tbody>
      </table>
      :
        <p>No products found in this category </p>
        }
    </div>
  )
}

export default CategoryDetails
