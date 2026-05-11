"use client"

type Props = {
  label?: string
  error?: string
  type?: string
  autocomplete?: string
  placeholder?: string
  name: string
  username?: string
  onChange: (username: string) => void
}

export default function Input({
  label,
  error,
  type,
  autocomplete,
  placeholder,
  name,
  username,
  onChange,
}: Props) {
  return (
    <>
      {label && (
        <label className="block text-lg font-medium leading-6 text-white">
          {label}
        </label> //error ? 'isInvalid mt-2' : 'isValid mt-2'
      )}
      <div id="validateUser" className={error==='default' ? ' mt-2' : error ? 'isInvalid mt-2' : 'isValid mt-2'}>
        <input
        type={type}
          name={name}
          id={name}
          autoComplete={autocomplete}
          placeholder={placeholder}
          value={username}
          onChange={(e) => onChange(e.target.value)}
          required
          className="mt-2 h-14 rounded bg-neutral-800 text-white border-blue-700 border-b-2 p-4  w-full placeholder:text-cyan-500"
        >
        </input>
        <span className="sm:col-span-3"></span>
      </div>
    </>
  )
}