import React from 'react'
import './page.css'
import { Signup }  from '@/components/forms'

const SignUp = () => {
  return (
    <>
      <div className='img-header h-10'></div>
      <div className='mx-4'>
        <Signup />
      </div>
      <div className='img-footer h-10'></div>
    </>
  )
}

export default SignUp