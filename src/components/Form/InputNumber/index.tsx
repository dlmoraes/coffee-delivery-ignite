import { Minus, Plus } from '@phosphor-icons/react'

export interface InputNumberProps {
  onChangeQty: (newQty: number) => void
  qty: number
}

export function InputNumber({ onChangeQty, qty }: InputNumberProps) {
  function handleIncrement() {
    onChangeQty(qty + 1)
  }

  function handleDecrement() {
    if (qty > 1) {
      onChangeQty(qty - 1)
    }
  }

  return (
    <div className="flex items-center justify-center gap-x-1 rounded-md bg-baseButton px-2 py-2">
      <button
        type="button"
        onClick={handleDecrement}
        className="text-purple hover:text-purpleDark "
      >
        <Minus />
      </button>
      <span className="remove-arrow w-6 bg-transparent text-center">{qty}</span>
      <button
        type="button"
        onClick={handleIncrement}
        className="text-purple hover:text-purpleDark"
      >
        <Plus />
      </button>
    </div>
  )
}
