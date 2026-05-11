"use client"
import { accountTypes } from '@/constants'
import React from 'react'

const SignupAccount = () => {
  return (
    <>
      <div className="sm:col-span-1">
        <label htmlFor="accType" className="block text-lg font-medium leading-6 text-white">
          Account type
        </label>
        <div className="mt-2">
          <select
            id="accType"
            name="accountType"
            autoComplete="account-type"
            className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
          >
            {
              accountTypes.map((type) => (
                <option key={type.id} value={type.type}>{type.type}</option>
              ))}
          </select>
        </div>
      </div>

    </>
  )
}

export default SignupAccount