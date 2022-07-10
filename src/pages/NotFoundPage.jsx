import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>Ooop! We can´t seem to find what you´re looking for</h2>
        
        <Link className='btn btn-success' as button to={'/'}>Go back to Home Page</Link>
      </div>
    </div>
  )
}

export default NotFoundPage