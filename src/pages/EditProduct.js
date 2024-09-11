import React, { useState } from 'react';

function EditProduct({ product, setEdit, products, setProducts }) {
  const [upDateProduct, setUpDateProduct] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
  });

  const handleInputChange = (e) => {
    setUpDateProduct({
      ...upDateProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(upDateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedList = products.map((prod) =>
          prod.id === product.id ? { ...prod, ...upDateProduct } : prod
        );
        setProducts(updatedList); 
        setEdit(null); 
      });
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          name="title"
          value={upDateProduct.title}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="description"
          value={upDateProduct.description}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          value={upDateProduct.price}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="category"
          value={upDateProduct.category}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <button
          type="submit"
          className="btn btn-success btn-sm"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-warning btn-sm"
          onClick={() => setEdit(null)} // Fix pour le bouton Cancel
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}

export default EditProduct;
