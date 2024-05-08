import { Button } from '@/components'
import React from 'react'
import './Forms.css'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <form className='form--custom my-10 p-10 justify-center mx-auto md:container container text-white'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-white">Login Page</h2>
          <p className="mt-1 text-sm leading-6 text-gray-200">
            This is for customers only.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
              <label htmlFor="username" className="block text-lg font-medium leading-6 text-white">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  placeholder='Username'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full  placeholder:text-cyan-500"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  placeholder='Password'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                />
              </div>
            </div>

          </div>
        </div>



        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">Remember me</h2>
          <p className="mt-1 text-sm leading-6 text-gray-300">
            Select the following option if you want to be kept LOGGED IN.
          </p>

          <div className="">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-white">
                      Keep me logged in.
                    </label>
                    <p className="text-gray-200">You will be logged in next time you visit.</p>
                  </div>
                </div>

              </div>
            </fieldset>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href={'/'}><Button buttonStyle='btn--danger' >Cancel</Button></Link>
        <Button type={'submit'} name={'login-request'} buttonStyle='btn--success' >Login</Button>
      </div>
    </form>
  )
}

export default LoginForm