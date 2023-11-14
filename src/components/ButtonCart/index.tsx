import { ShoppingCart } from '@phosphor-icons/react'

export interface ButtonCartProps {
  qty?: number
}

export function ButtonCart({ qty = 0 }: ButtonCartProps) {
  return (
    <button className="relative rounded-md bg-yellowLight p-2">
      {qty > 0 ?? (
        <span className="absolute -right-2 -top-3 rounded-full bg-yellowDark px-2 py-0.5 text-sm font-bold text-white">
          {qty}
        </span>
      )}
      <ShoppingCart weight="fill" className="h-6 w-6 text-yellowDark" />
    </button>
  )
}
