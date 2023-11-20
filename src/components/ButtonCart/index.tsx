import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CheckoutContext } from '../../context/CheckoutContext'

export function ButtonCart() {
  const { qtyItemsToCart, status } = useContext(CheckoutContext)

  const isShow = status === 'WAITING'
  const urlTarget = isShow ? '/checkout' : '/checkout-success'

  return (
    <NavLink to={urlTarget} title="Checkout">
      <button className="relative rounded-md bg-yellowLight p-2">
        {isShow && qtyItemsToCart > 0 ? (
          <span className="absolute -right-2 -top-3 rounded-full bg-yellowDark px-2 py-0.5 text-sm font-bold text-white">
            {qtyItemsToCart}
          </span>
        ) : (
          <></>
        )}
        <ShoppingCart weight="fill" className="h-6 w-6 text-yellowDark" />
      </button>
    </NavLink>
  )
}
