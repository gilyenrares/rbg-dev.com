import React from 'react'
import './page.css'
import { LoginForm } from '@/forms'

const Login = () => {
  return (
    <>
      <div className='img-header h-10'></div>
      <div className=''>
        <LoginForm />
      </div>
      <div className='img-footer h-10'></div>
    </>
  )
}

export default Login