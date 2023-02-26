import React from 'react';
import { Form, Formik} from 'formik';
import { createEmployeeRequest } from '../api/employees.api.js'
function Add() {
  return (
    <div>
        <Formik initialValues={{
            name:"",
            salary:""
        }}onSubmit={ async (values)=>{
            const response = await createEmployeeRequest(values);
            console.log(response);
        }}>
        {({handleChange,handleSubmit}) =>(
            <Form onSubmit={handleSubmit}>

                <input type="text" name='name' placeholder='write a Name'
                onChange={handleChange}/>

                <input type="text" name='salary' placeholder='write a salary'
                onChange={handleChange} />

                <button type='submit'>Save</button>
             </Form>
        )}    
        </Formik>
    </div>
  )
}

export default Add