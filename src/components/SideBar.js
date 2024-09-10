import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../pages/Products'
function SideBar() {
  return (
    <>
      <ul className='List-unstyled'>
        <li>
            <Link to={'Products'} > get All Products </Link>
        </li>
        <li>
            <a href='#'>get All Categories</a>
        </li>
      </ul>
    </>
  )
}

export default SideBar
