import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Categories() {
    const [categories, setCategories]= useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/categories`)
        .then(res=>res.json())
        .then((data)=>setCategories(data))

    },[])

    const handleDelete=(category)=>{
      const deleteCategory = categories.filter((cat)=>cat !== category)
      setCategories(deleteCategory)
    }
  return (
    <div>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">category</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>
    {categories.map((category)=>(
      <tr key={category} >
        
         <td>{category}</td>
        <td>
        <button  className="btn btn-danger btn-sm" onClick={()=>handleDelete(category)} >Delete</button>
        <Link  to={`/category/${category}`} className="btn btn-info btn-sm">View</Link>
        <button  className="btn btn-primary btn-sm">Edit</button>
      </td>
    </tr>
    ))}
    
  </tbody>
</table>  
    </div>
  )
}

export default Categories
