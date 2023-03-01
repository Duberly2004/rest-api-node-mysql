import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEmployees } from '../context/EmployeesProvider';

function EmployeesCard({employee}) {
    const { deleteEmployee } = useEmployees();
    const navigate = useNavigate();
    return (
        <div>
            <p>{employee.id}</p>
            <h1>{employee.name}</h1>
            <p>{employee.salary}</p>
            <button onClick={()=>deleteEmployee(employee.id)}>delete</button>
            <button onClick={()=> navigate(`/rest-api-node-mysql/edit/${employee.id}`)} >Edit</button>
            <hr />
        </div>
    )
}

export default EmployeesCard