import React, { useEffect, useState } from 'react';

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);


  
  

  return (
    <div>
      <h1>Categories</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Category</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
                <td>{index}</td>
              <td>{category}</td>
              <td>
                <button className="btn btn-danger btn-sm" >Delete</button>
                <button className="btn btn-info btn-sm">View</button>
                <button className="btn btn-primary btn-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Category;