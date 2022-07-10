import {Formik, Form} from 'formik'


const newUser = {
  nameUser:'',
  email: '',
  password: '',
}

const RegisterForm = () => {
  return (
    <div>
      <Formik
          initialValue = {newUser}
          onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
        >
          
        
         <Form className=' d-flex flex-column align-items-center'>
          <div className='d-flex flex-column  align-items-start mt-5'>
          <label className='form-label ' htmlFor="user">User Name</label>
           <input className='form-control'
             type="text"
             name="user"
             id='user'
             placeholder='MichDEV'
           />
          </div >
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
           <button className='btn btn-primary mt-4' type="submit">Registrar</button>
           </div>
           
         </Form>
       
        </Formik>
    </div>
  )
}

export default RegisterForm