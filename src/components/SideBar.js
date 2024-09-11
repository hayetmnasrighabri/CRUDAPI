import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <ul className='list-unstyled'>
        <li>
            <Link to='/Products'>Get All Products</Link>
        </li>
        <li>
            <Link to='/Category'>Get All Categories</Link>
        </li>
      </ul>
    </>
  )
}

export default SideBar;
