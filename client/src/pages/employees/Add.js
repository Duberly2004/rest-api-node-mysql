import React from 'react';
import { Form,Formik } from 'formik';
import { createEmployeeRequest } from '../../api/employees.api.js'; 
function Add() {
  return (
    <div>
        <p>hola</p>
        <Formik initialValues={{
            name:"",
            salary:""
        }}
        // Cuando se envien el formulario
        onSubmit={ async (values,actions) => {
            console.log(values)
            try {
            const response = await createEmployeeRequest(values);
            console.log(response)
            actions.resetForm()
            } catch (error) {
                console.error(error)
            }
            
        }}
        >
        {({ handleChange,handleSubmit,values}) => (
            <Form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Write a name'
            onChange={handleChange}
            value={values.name}/>
            
            <input type="text" name="salary" placeholder='Write a Salary' 
            onChange={handleChange}
            value={values.salary}/>

            <button type='submit'> Save</button>
            </Form>
        )}
        </Formik>
    </div>
  )
}

export default Add