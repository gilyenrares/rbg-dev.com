import React from 'react'
import './sign-up.css'
import { SignUpForm } from '@/forms'

const SignUp = () => {
  return (
    <>
      <div className='img-header h-10'></div>
      <div className='img-body h-32'>
        <SignUpForm />
      </div>
      <div className='img-footer h-10'></div>
    </>
  )
}

export default SignUp