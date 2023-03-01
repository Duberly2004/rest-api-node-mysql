import { EmployeeContext } from "./EmployeesContext";
import {
    createEmployeeRequest,
    getEmployeesRequest,
    deleteEmployeeRequest,
    updateEmployeeRequest,
    getEmployeeRequest
} from '../api/employees.api.js'
import { useContext, useState } from "react";


export const useEmployees = () => {
    const context = useContext(EmployeeContext)
    
    if(context===undefined){
        throw new Error("UseEmployees must be used within a EmployesContextProvider")
    }
    return context
}

export const EmployeeContextProvider = ({children}) =>{
    const [ employees,setEmployees ] = useState([]); 

    const createEmployee = async (employee) =>{
        try {
            await createEmployeeRequest(employee);
            alert('Employee registered successfully')
        } catch (error) {
            alert("ERROR creating employee")
            console.error(error)
        }
    };

    const loadEmployees = async ()=>{
        try {
            const response = await getEmployeesRequest();
            setEmployees(response.data);
            return response.data
        } catch (error) {
            alert("Ups! algo salio mal :( ") 
            console.error(error);   
        }
    };
    
    const deleteEmployee = async (id) =>{
        try {
           await deleteEmployeeRequest(id);
           setEmployees(employees.filter((employee) => employee.id !== id));
           setTimeout(()=>{
            alert('Employee deleted succesfully')
        }, 300);
           
        } catch (error) {
        }
    };

    const updateEmployee = async (id,EmployeeUpdated) =>{
        try {
            await updateEmployeeRequest(id,EmployeeUpdated)
        } catch (error) {
            console.error(error)
        }
    }

    const getEmployee = async (id) =>{
        try {
            const response = await getEmployeeRequest(id);
            return response.data
            
        } catch (error) {
            console.log(error)
            
        }

    }

    return(
        <EmployeeContext.Provider value={ 
            {
            employees,
            createEmployee,
            loadEmployees,
            deleteEmployee,
            updateEmployee,
            getEmployee
            } }>
            {children}
        </EmployeeContext.Provider>
    )

}