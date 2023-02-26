import axios from 'axios';

export const createEmployeeRequest = async ( employee ) => {
    return await axios.post('https://rest-api-node-mysql-production.up.railway.app/api/employees',employee)
}