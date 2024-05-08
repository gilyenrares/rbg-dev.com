import { formProjectsList } from '@/constants'
import React from 'react'

const SelectProjects = () => {
  return (
    <>
      {formProjectsList.map((project) => (
        <div key={project.title} className="sm:col-span-3">
          <label htmlFor="country" className="block text-lg font-medium leading-6 text-white">
            {project.title}
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
            >
              {project.options.map((options: any) => (
                <option key={options.option}>{options.option}</option>
              ))}
            </select>
          </div>
        </div>))}
    </>
  )
}

export default SelectProjects