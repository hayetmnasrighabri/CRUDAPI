import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
      </ul>
       <ul className="navbar-nav ms-auto">
       <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
