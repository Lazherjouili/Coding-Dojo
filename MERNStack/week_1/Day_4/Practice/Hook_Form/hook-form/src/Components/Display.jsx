import React from 'react'

const Display = (props) => {
    const {user} =props
  return (
    <div className='container col-4 mt-4'>
        <h4 className='text-center'>Your Form Data</h4>
        <p>First Name:{user.firstName}</p>
        <p>Last Name:{user.lastName}</p>
        <p>Email:{user.email}</p>
        <p>Password:{user.password}</p>
        <p>Confirm Password:{user.cpassword}</p>
    </div>
  )
}

export default Display