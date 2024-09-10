import React, { useState } from 'react';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [products, setProducts]=useState([])
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://fakestoreapi.com/products`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        price: parseFloat(price),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
     setProducts([...products, title, price])
     setTitle('')
     setPrice(0)
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;