import React from 'react'
import {Link} from 'react-router-dom';
import imgNaruto from "../img/naruto.png"
import hamburgerMenu from "../img/menu-hamburguesa.png"
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          
          <img src={imgNaruto} class="m-2 circle" width="60" height="110" ></img>
          <Link to={"/rest-api-node-mysql"} className="navbar-brand text-white">API REST Du</Link>
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <img width="50" height="30" src={hamburgerMenu} alt="" />
            </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
              <Link className="nav-link active text-white" to={'/rest-api-node-mysql'}>Home</Link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Employees
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className='dropdown-item' to={'/rest-api-node-mysql/add'}>Add</Link></li>
                  <li><Link className='dropdown-item' to={'/rest-api-node-mysql/employees'}>See Employees</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar