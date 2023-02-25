import axios from 'axios';
export const createEmployeeRequest = async (Employee) =>{
    return await axios.post('http://localhost:4000/api/employees',Employee)
}