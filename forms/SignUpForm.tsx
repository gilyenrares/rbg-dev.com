import { Button, SelectProjects } from '@/components'
import React from 'react'
import './Forms.css'
import Link from 'next/link'

function SignUpForm() {
  return (
    <form className='form--custom my-10 p-10 justify-center mx-auto md:container container text-white'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-white">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-200">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <SelectProjects />
            <div className="sm:col-span-3">
              <label htmlFor="username" className="block text-lg font-medium leading-6 text-white">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded h-14  bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-4 w-full">
                  <span className="flex select-none items-center pl-3 text-white sm:text-sm">website.com/</span>
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
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-white">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-300">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-white">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder='First name'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full  placeholder:text-cyan-500"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-lg font-medium leading-6 text-white">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder='Last name'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-lg font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Email'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-lg font-medium leading-6 text-white">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>



            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-xl font-medium leading-6 text-white">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  placeholder='Street address'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-lg font-medium leading-6 text-white">
                City / Town
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  placeholder='City / Town'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-lg font-medium leading-6 text-white">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  placeholder='State / Province'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-lg font-medium leading-6 text-white">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  placeholder='Post Code'
                  required
                  className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 placeholder:text-cyan-500 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-300">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-white">By Email</legend>
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
                      Updates
                    </label>
                    <p className="text-gray-200">Get notified when new updates have been made to your project/s.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-white">
                      Newsletter
                    </label>
                    <p className="text-gray-200">Get notified when we have something new on the website.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-white">
                      Offers
                    </label>
                    <p className="text-gray-200">Get notified when there is a new offer or promotion.</p>
                  </div>
                </div>
              </div>
            </fieldset>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center sm:justify-end gap-x-6">
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <Link href={'/'}><Button buttonStyle='btn--danger' >Cancel</Button></Link>
          <Button type={'submit'} name='sign-up-request' buttonStyle='btn--success' >Sign Up</Button>
        </div>
      </div>
    </form>
  )
}

export default SignUpForm