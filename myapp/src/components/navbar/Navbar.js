import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Turbo Deal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to="">Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <Link to="about">About</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact"><Link to="contact">Contact</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        {/* <div style={{backgroundColor:"green",color:"white",height:"50px",padding:"5px"}}>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
        </div> */}
        <Outlet/>
    </div>
  )
}

export default Navbar