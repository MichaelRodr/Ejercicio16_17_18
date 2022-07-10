import React from 'react'
import { Formik,Form } from "formik";
import { Link } from 'react-router-dom';


const dataUser ={
  email:'',
  password:''
}



const LoginForm = () => {
  return (
    <div>
        <Formik
          initialValue = {dataUser}
          onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
        >
          
        
         <Form className=' d-flex flex-column align-items-center'>
          <div className='d-flex flex-column  align-items-start mt-5'>
          <label className='form-label ' htmlFor="email">Email</label>
           <input className='form-control'
             type="email"
             name="email"
             id='email'
             placeholder='name@gmail.com'
           />
          </div >
          <div className='d-flex flex-column  align-items-start mt-5'>
          <label className='form-label ' htmlFor="password">Password</label>
           <input className='form-control'
             type="password"
             name="password"
             id='password'
             placeholder='*****'
           />
          </div>
           <div className='d-flex align-items-start'>
           <button className='btn btn-primary mt-4' type="submit">Login</button>
           </div>
           <h6 className=' mt-4'>Aun no estas {<Link to='/register'>Registrado</Link>} ?</h6>
         </Form>
       
        </Formik>
     
    </div>
  )
}

export default LoginForm