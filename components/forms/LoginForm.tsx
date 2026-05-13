"use client"
import  Button  from '@/components/ui/Button'
import React, { useState } from 'react'
import Link from 'next/link'
import Input from '@/components/fields/Input';

export default function LoginForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("default");
  const [passwordError, setPasswordError] = useState("default");

function handleUsername(username: string) {
  setUsername(username);
  
  if(!username){
    setUserError("Username is required");
  }
    else if (/[ ]/.test(username)) {
    setUserError("No spaces allowed");
  } else if (username.length < 3) {
    setUserError("Minimum 3 characters");
  } else if(/[¬`£~/!@#$%^&*(),.?":{}|<>]/.test(username)){
    setUserError("No Special characters")
  } else {
    setUserError("");
  }
}
function handlePassword(value: string) {
  setPassword(value);
  setPasswordError(validatePassword(value));
}
function validatePassword(password: string) {
  if (!password) return "Password is required";

  if (password.length < 8)
    return "At least 8 characters";

  if (!/[A-Z]/.test(password))
    return "Must include an uppercase letter";

  if (!/[a-z]/.test(password))
    return "Must include a lowercase letter";

  if (!/[0-9]/.test(password))
    return "Must include a number";

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    return "Must include a special character";

  return "";
}
  return (
    <form className='form--custom justify-center my-10 p-10  mx-auto md:container container text-white'>
      <div className="space-y-12 ">
        <div className="border-b border-gray-900/10">
          <h2 className="text-lg font-semibold leading-7 text-white">Login Page</h2>
          <p className="mt-1 text-sm leading-6 text-gray-200">
            This is for customers only.
          </p>
           
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input label="Username" type="text" name="username" error={userError} placeholder="Username"  onChange={(val) => handleUsername(val)}/>
            {userError==="default" ? "Letters and numbers only!" :userError && <p className="text-sm text-red-500">{userError}</p>}
            </div>
            <div className="sm:col-span-3">
              <Input label="Password" type="password" name="password" error={passwordError} placeholder="Password"  onChange={(pas) => handlePassword(pas)}/>
            {passwordError==="default" ? "Choose a STRONG password" :passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className=" order-last sm:order-first ">
            <h2 className="text-base font-semibold leading-7 text-white">Remember me</h2>
            <p className="mt-1 text-sm leading-6 text-gray-300">
              Select the following option if you want to be kept LOGGED IN.
            </p>

          
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
          <div className="">
            <h2 className="text-base font-semibold leading-7 text-white">Password Rules</h2>
            <ul className="mt-1 text-sm leading-6 text-gray-300">
              <li>At least 8 characters long</li>
              <li>At least one Number</li>
              <li>At least one Capital letter</li>
              <li>At least one Special character</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center sm:justify-end gap-x-6">
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <Link href={'/'}><Button buttonStyle='btn--danger' >Cancel</Button></Link>
          <Button type={'submit'} name={'login-request'} buttonStyle='btn--success' buttonSize='btn--small'>Login</Button>
        </div>
      </div>
    </form>
  )
}
