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
    <div className='container p-4'>
      <div className="row ">
        <div className=" col-md-4 mx-auto">
          <div className="Employees-form card " >
            <div className="card-body">
                <h1 className='text-center fs-3 p-3 color  text-white  '>
                  {
                  params.id ? "Edit Employee" :"New Employee"
                  }
                </h1>
                  <Formik 
                    initialValues={employees}
                    enableReinitialize={true}
                    onSubmit={ async (values,actions)=>{

                      if(params.id){
                        const editEmployee = async()=>await updateEmployee(params.id,values);
                        editEmployee();
                      }else{
                        const insertEmploye = async()=>await createEmployee(values);        
                        insertEmploye();                
                      }
                      setEmployees({
                        name:"",
                        salary:""
                      })
                      navigate('/rest-api-node-mysql/employees')
                  }}>

                  {({handleChange,handleSubmit,values}) =>(
                      <Form onSubmit={handleSubmit}>

                          <div className="form-group">
                            <label className='text-white pb-1'>Name</label>
                            <input className='form-control mb-3'
                            type="text" name='name' placeholder='write a Name'
                            onChange={handleChange} value={values.name} />
                          </div>

                          <div className="form-group">
                          <label className='text-white pb-1'>Salary</label>
                            <input className='form-control mb-5' 
                            type="text" name='salary' placeholder='write a salary'
                            onChange={handleChange} value={values.salary}/>
                          </div>
                          
                          <div className="d-grid mb-4">
                            <button className='btn btn-success gap-*' 
                            type='submit'>Save</button>
                          </div>
                          
                      
                      </Form>
                  )}    
                  </Formik>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default EmployeesForm