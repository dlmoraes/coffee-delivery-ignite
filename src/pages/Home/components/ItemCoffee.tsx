import { ShoppingCart } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { InputNumber } from '../../../components/Form/InputNumber'
import { CheckoutContext } from '../../../context/CheckoutContext'
import { CartItem } from '../../../reducers/checkouts/reducer'
import { formatNumber } from '../../../utils'

export interface Coffee {
  id: string
  imgSrc: string
  tags: string[]
  title: string
  description: string
  value: number
}

export function ItemCoffee(props: Coffee) {
  const [qty, setQty] = useState(1)
  const [amount, setAmount] = useState(() => {
    return props.value * qty
  })
  const { addItemToCart } = useContext(CheckoutContext)

  function onChangeQty(newQty: number) {
    setQty(newQty)
  }

  useEffect(() => {
    setAmount(props.value * qty)
  }, [qty, props.value])

  function onAddCartItem() {
    const item = {} as CartItem
    const newIdCart = uuidv4()

    item.coffeeItem = {
      ...props,
    }
    item.id = newIdCart
    item.qty = qty

    addItemToCart(item)
  }

  return (
    <div className="radius-card flex flex-col items-center justify-center bg-baseCard px-5 pb-5">
      <img
        className="mb-1 h-28 w-28 -translate-y-5 object-cover"
        src={props.imgSrc}
        alt={`Imagem de uma xícara de ${props.title}`}
      />
      <div className="flex items-center gap-1">
        {props.tags.map((tag) => {
          return (
            <div
              key={tag}
              className="mb-4 rounded-full bg-yellowLight px-2 py-1 text-tag font-bold uppercase text-yellowDark"
            >
              {tag}
            </div>
          )
        })}
      </div>

      <div className="pb-2 font-display text-xl font-bold leading-13">
        {props.title}
      </div>
      <div className="text-center text-sm leading-13 text-baseLabel">
        {props.description}
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1">
          R$ <div className="font-display text-2xl">{formatNumber(amount)}</div>
        </div>
        <div className="flex flex-1 gap-x-2">
          <InputNumber qty={qty} onChangeQty={onChangeQty} />
          <button
            className="rounded-md bg-purpleDark p-2 hover:bg-purple"
            onClick={onAddCartItem}
          >
            <ShoppingCart weight="fill" className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
