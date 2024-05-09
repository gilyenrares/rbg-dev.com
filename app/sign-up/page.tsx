import React from 'react'
import './page.css'
import { SignUpForm } from '@/forms'

const SignUp = () => {
  return (
    <>
      <div className='img-header h-10'></div>
      <div className='mx-4'>
        <SignUpForm />
      </div>
      <div className='img-footer h-10'></div>
    </>
  )
}

export default SignUp