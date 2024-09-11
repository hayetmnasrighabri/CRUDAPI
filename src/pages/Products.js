import React, { useEffect, useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import EditProduct from './EditProduct';

function Products() {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(null); 


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`https://fakestoreapi.com/products/${productId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const updatedProducts = products.filter(
              (product) => product.id !== productId
            );
            setProducts(updatedProducts);
          });
      }
    });
  };

 
  const handleEdit = (id) => {
    setEdit(id)
  };

  return (
    <div>
      <h1>Products</h1>
      <Link to="/Products/Add" className="btn btn-success">
        Add Product
      </Link>
      <hr />
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            edit === product.id ? (
              // Afficher le formulaire d'édition pour le produit en mode édition
              <EditProduct
                key={product.id}
                product={product}
                setEdit={setEdit}
                products={products}
                setProducts={setProducts}
              />
            ) : (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 20)}...</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.rating?.rate}</td>
                <td className="btn btn-td">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-info btn-sm"
                    to={`/product/${product.id}`}
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
