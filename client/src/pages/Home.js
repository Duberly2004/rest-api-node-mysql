import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home '>
      <div>
        <h1 className='text-white fs-1'>Welcome!!</h1>
        <p className='text-white'>This is my API REST using mysql , node , react</p>
  
        <Link to={"/rest-api-node-mysql/add"} className="text-warning  fs-4">Get Started</Link>
        </div>
      
    </div>
  )
}

export default Home