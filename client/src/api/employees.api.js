import axios from 'axios';

export const createEmployeeRequest = async ( employee ) => {
    return await axios.post('https://rest-api-node-mysql-production.up.railway.app/api/employees',employee)
}

export const getEmployeesRequest = async () => {
    return await axios.get('https://rest-api-node-mysql-production.up.railway.app/api/employees');
}

export const deleteEmployeeRequest = async ( id ) => {
    return await axios.delete(`https://rest-api-node-mysql-production.up.railway.app/api/employees/${id}`)
}

export const updateEmployeeRequest = async ( id , EmployeeUpdate) => {
    return await axios.patch(`https://rest-api-node-mysql-production.up.railway.app/api/employees/${id}`,EmployeeUpdate)
}

export const getEmployeeRequest = async ( id ) => {
    return await axios.get(`https://rest-api-node-mysql-production.up.railway.app/api/employees/${id}`)
}