import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeesCard from '../components/EmployeesCard';
import { useEmployees } from '../context/EmployeesProvider';

function EmployeesPage() {
    const {employees,loadEmployees} = useEmployees();
    const navigate = useNavigate()
    useEffect(()=>{
        const listEmployees = async()=>{
            await loadEmployees()
        }
        listEmployees();
    },[]);

    function renderMain(){
        if(employees.length===0)return (
            <div className='container text-center'>
                <h1 className='text-primary mt-4'>No employees yet</h1>
                <button onClick={()=>navigate('/rest-api-node-mysql/add')} className='btn btn-primary mt-3'>add</button>
            </div>
        );
        return employees.map((employee)=><EmployeesCard employee={employee} key={employee.id}/>)
    }
  return (
    <div>
        <h1 className='text-center text-white' >Employees</h1>
        <div className='container mt-4'>
            <div className='row row-cols-xl-5 row-cols-md-3 g-8'>
                {renderMain()}

            </div>
        </div>
    </div>
  )
}

export default EmployeesPage