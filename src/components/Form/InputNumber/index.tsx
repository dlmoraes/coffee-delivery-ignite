import { Minus, Plus } from '@phosphor-icons/react'
import { ChangeEvent, useState } from 'react'

export function InputNumber() {
  const [value, setValue] = useState(0)

  function handleIncrement() {
    console.log('handleIncrement')
    setValue((state) => {
      state += 1
      return state
    })
  }

  function handleDecrement() {
    console.log('handleDecrement')
    setValue((state) => {
      state -= 1
      return state < 0 ? 0 : state
    })
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    console.log('onChange')
    const newValue = Number(event.target.value)
    setValue((state) => {
      state = newValue
      return state
    })
  }

  return (
    <div className="flex items-center justify-center gap-x-1 rounded-md bg-baseButton px-2 py-2">
      <button
        onClick={handleDecrement}
        className="text-purple hover:text-purpleDark "
      >
        <Minus />
      </button>
      <input
        type="number"
        min={0}
        max={99}
        value={value}
        onChange={handleChange}
        className="remove-arrow w-6 bg-transparent text-center"
      />
      <button
        onClick={handleIncrement}
        className="text-purple hover:text-purpleDark"
      >
        <Plus />
      </button>
    </div>
  )
}
