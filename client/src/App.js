import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Add from './components/Add';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage.js'
function App() {
  return (
   <>
   <Navbar/>
     <Routes>
      <Route path='/rest-api-node-mysql' element={<Home/>}/>
      <Route path='/rest-api-node-mysql/add' element={<Add/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
   </>
  )
}

export default App