import React,{ useEffect, useState} from 'react';
import { Form, Formik} from 'formik';
import { useEmployees } from '../context/EmployeesProvider';
import { useParams,useNavigate } from 'react-router-dom';


function EmployeesForm() {
  const {createEmployee,getEmployee,updateEmployee} = useEmployees();
  const params = useParams();
  const navigate = useNavigate()
  const [employees,setEmployees] = useState({
    name:"",
    salary:""
  });

  

  useEffect(()=>{
    const loadEmployees = async() =>{
      if(params.id){
        const employee = await getEmployee(params.id);
        setEmployees({
          name:employee.name,
          salary:employee.salary 
        });
      }
    }
    loadEmployees()

  },[])

  return (
    <div>
      <h1>{
        params.id ? "Edit Employee" :"New Employee"
        }</h1>
        <Formik 
          initialValues={employees}
          enableReinitialize={true}
          onSubmit={ async (values,actions)=>{

            if(params.id){
              updateEmployee(params.id,values)
            }else{
              createEmployee(values)
            }
            setEmployees({
              name:"",
              salary:""
            })
            navigate('/rest-api-node-mysql/employees')
        }}>

        {({handleChange,handleSubmit,values}) =>(
            <Form onSubmit={handleSubmit}>

                <input type="text" name='name' placeholder='write a Name'
                onChange={handleChange} value={values.name} />

                <input type="text" name='salary' placeholder='write a salary'
                onChange={handleChange} value={values.salary}/>

                <button type='submit'>Save</button>
             
             </Form>
        )}    
        </Formik>
    </div>
  )
}

export default EmployeesForm