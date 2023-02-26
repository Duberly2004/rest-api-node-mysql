import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to={'/rest-api-node-mysql'}>Home</Link></li>
            <li><Link to={'/rest-api-node-mysql/add'}>Add</Link></li>
        </ul>
    </div>
  )
}

export default Navbar