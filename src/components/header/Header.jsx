import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container d-flex '>
      <div className=' m-3 '>
        <Link  to='/'>Home</Link>
      </div>
      <div className=' m-3'>
        <Link to='/login'>Login</Link>
      </div>
      <div className=' m-3'>
        <Link to='/register'>Register</Link>
      </div>
      <div className=' m-3'>
        <Link to='/tasks'>Tasks</Link>
      </div>
    </div>
  )
}

export default Header