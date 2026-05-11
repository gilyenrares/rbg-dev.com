'use client'
import React, { useState } from 'react'

const SignupProfile = ( {accountTypeList, projectList}) => {
  // const [accountType, setAccountType] = useState(accountTypeList[0])
  // const [project, setProject] = useState(projectList[0])
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-1">
        <label htmlFor="accType" className="block text-lg font-medium leading-6 text-white">
          Account type
        </label>
        <div className="mt-2">
          <select
            id="accType"
            name="accountType"
            value={accountTypeList[1].type}
            onChange={(event) => accountTypeList(event.target.value)}
            className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
          >
            {
              accountTypeList.map((type) => (
                <option key={type.id} value={type.type}>{type.type}</option>
              ))}
          </select>
        </div>
      </div>

      <div  className="sm:col-span-2">
        <label htmlFor="country" className="block text-lg font-medium leading-6 text-white">
          Select Project
        </label>
        <div className="mt-2">
          <select
            id="country"
            name="country"
            value={projectList[1].option}
            onChange={(event) => projectList(event.target.value)}
            className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
          >
            {
              projectList.map((options) => (
                <option key={options.option} value={options.value}>{options.option}</option>
              ))}
          </select>
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="username" className="block text-lg font-medium leading-6 text-white">
          Username
        </label>
        <div className="mt-2">
          <div className="flex rounded h-14  bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-4 w-full">
            <span className="flex select-none items-center pl-3 text-white sm:text-sm">{projectList[1].option}/</span>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              required
              className="block flex-1 border-0 bg-transparent text-white  sm:text-sm sm:leading-6 focus-visible:outline-none placeholder:text-cyan-500"
              placeholder="janesmith"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupProfile