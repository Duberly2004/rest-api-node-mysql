import React from 'react'
import {Route,Routes} from 'react-router-dom';
import EmployeesForm from './pages/EmployeesForm.js';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage.js';
import EmployeesPage from './pages/EmployeesPage.js';
import Footer from "./components/Footer.js"
function App() {
  return (
   <>
   <Navbar/>
     <Routes>
      <Route path='/rest-api-node-mysql' element={<Home/>}/>
      <Route path='/rest-api-node-mysql/add' element={<EmployeesForm/>}/>
      <Route path='/rest-api-node-mysql/edit/:id' element={<EmployeesForm/>}/>
      <Route path='/rest-api-node-mysql/employees' element={<EmployeesPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App