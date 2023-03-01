import React, { useEffect } from 'react';
import EmployeesCard from '../components/EmployeesCard';
import { useEmployees } from '../context/EmployeesProvider';

function EmployeesPage() {
    const {employees,loadEmployees} = useEmployees();

    useEffect(()=>{
        const listEmployees = async()=>{
            await loadEmployees()
        }
        listEmployees();
    },[]);

    function renderMain(){
        if(employees.length===0)return <h1>No employees yet</h1>;
        return employees.map((employee)=><EmployeesCard employee={employee} key={employee.id}/>)
    }
  return (
    <div>
        <h1>Employees</h1>
        <div>
            {renderMain()}
        </div>
    </div>
  )
}

export default EmployeesPage