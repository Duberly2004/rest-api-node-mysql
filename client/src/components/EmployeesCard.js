import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEmployees } from '../context/EmployeesProvider';

function EmployeesCard({employee}) {
    const { deleteEmployee } = useEmployees();
    const navigate = useNavigate();
    return (
        <div className='card text-center m-3 '>
            <div className="card-body">
                <h1 className='card-title '>{employee.name}</h1>
                <p > <span className='text-primary'>Salary:</span>  {employee.salary}</p>
                <button className='btn btn-danger m-1' onClick={()=>deleteEmployee(employee.id)}>delete</button>
                <button className='btn btn-primary m-1' onClick={()=> navigate(`/rest-api-node-mysql/edit/${employee.id}`)} >Edit</button>
            </div>
           
        </div>
    )
}

export default EmployeesCard