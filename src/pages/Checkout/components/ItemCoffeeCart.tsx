import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { InputNumber } from '../../../components/Form/InputNumber'
import { CheckoutContext } from '../../../context/CheckoutContext'
import { formatNumber } from '../../../utils'

export interface ItemCoffeeCartProps {
  id: string
  imgSrc: string
  title: string
  qty: number
  value: number
}

export function ItemCoffeeCart({
  id,
  imgSrc,
  title,
  qty,
  value,
}: ItemCoffeeCartProps) {
  const { changeQtyToCart, removeItemToCart } = useContext(CheckoutContext)

  function amountByItem(value: number, qty: number) {
    const result = value * qty
    return formatNumber(result)
  }

  function onChange(newQty: number) {
    newQty >= 1 ? changeQtyToCart(id, newQty) : removeItemToCart(id)
  }

  function handleRemoveItem() {
    removeItemToCart(id)
  }

  return (
    <div>
      <div className="flex gap-x-5">
        <img src={imgSrc} alt="" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-bodyM">{title}</span>
            <div className="flex items-center gap-1">
              R${' '}
              <div className="text-bodyM font-semibold">
                {amountByItem(value, qty)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <InputNumber onChangeQty={onChange} qty={qty} />
            <button
              onClick={handleRemoveItem}
              type="button"
              className="flex items-center gap-4 rounded bg-baseButton p-2.5 text-baseText hover:bg-baseHover"
            >
              <Trash className="h-4 w-4 text-purple" />
              <span className="text-buttonM font-normal uppercase">
                remover
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="my-6 h-0.5 w-full bg-baseButton"></div>
    </div>
  )
}
