import Link from 'next/link'
import React from 'react'
import Button from './Button'
import '../forms/Forms.css'

const Account = () => {
  return (
    <div className='form--custom p-6'>
      <div className='text-center text-red-500'>You are not Logged in</div>
      <div className="my-6 flex items-center justify-center gap-x-6">
        <Link href={'/sign-up'}><Button buttonStyle='btn--primary' >Sign Up</Button></Link>
        <Link href={'/login'}><Button buttonStyle='btn--success' >Login</Button></Link>
      </div>
    </div>
  )
}

export default Account