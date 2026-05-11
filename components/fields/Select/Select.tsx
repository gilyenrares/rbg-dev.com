"use client"

type Option = {
  label: string
  value: string
}

type Props = {
  label?: string
  name: string
  value?: string
  options: Option[]
  onChange: (value: string) => void
}

export default function Select({
  label,
  name,
  value,
  options,
  onChange,
}: Props) {
  return (
    <>
      {label && (
        <label className="block text-lg font-medium leading-6 text-white">
          {label}
        </label>
      )}

      
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-4 h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  )
}