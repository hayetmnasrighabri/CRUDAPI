import React from 'react'

import './Product.css'
function Product({products}) {
  return (
    <div>
      <div className="card">
       <img src={products.image} className="card-img-top" alt={products.title}/><hr/>
       <p className='price'>price: {products.price}$</p><hr/>
     <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
       <p className="card-text">{products.description}</p>
      
       
       </div>
  </div>
    </div>
  )
}

export default Product