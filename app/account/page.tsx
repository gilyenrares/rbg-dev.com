import React from 'react'
import './page.css'
import { Account } from '@/components'

const SignUp = () => {
  return (
    <>
      <div className='img-header h-10'></div>
      <div className='img-body flex flex-col justify-center'>
        <Account />
      </div>
      <div className='img-footer h-10'></div>
    </>
  )
}

export default SignUp