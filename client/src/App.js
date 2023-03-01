import React from 'react'
import {Route,Routes} from 'react-router-dom';
import EmployeesForm from './pages/EmployeesForm.js';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage.js';
import EmployeesPage from './pages/EmployeesPage.js';
function App() {
  return (
   <>
   <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rest-api-node-mysql/add' element={<EmployeesForm/>}/>
      <Route path='/rest-api-node-mysql/edit/:id' element={<EmployeesForm/>}/>
      <Route path='/rest-api-node-mysql/employees' element={<EmployeesPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
   </>
  )
}

export default App