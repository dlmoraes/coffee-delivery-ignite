import { useContext } from 'react'
import { CheckoutContext } from '../../../context/CheckoutContext'
import { formatMoney } from '../../../utils'
import { ItemCoffeeCart } from './ItemCoffeeCart'

export interface CoffeesSelectedProps {}

export function CoffeesSelected() {
  const { cartItems, amountTotal, amountItens, deliveryFeeTotal } =
    useContext(CheckoutContext)

  return (
    <div className="flex flex-col">
      <div className="font-display text-titleXS">Cafés selecionados</div>
      <div className="radius-card mt-4 bg-baseCard p-10">
        <div className="flex w-full flex-col">
          {cartItems.map((item) => {
            return (
              <ItemCoffeeCart
                key={item.id}
                {...item.coffeeItem}
                qty={item.qty}
                id={item.id}
              />
            )
          })}

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-bodyS">Total de itens</span>
              <span className="text-bodyS">{formatMoney(amountItens)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-bodyS">Entrega</span>
              <span className="text-bodyS">
                {formatMoney(deliveryFeeTotal)}
              </span>
            </div>
            <div className="flex items-center justify-between text-bodyL font-bold text-baseSubtitle">
              <span>Total</span>
              <span>{formatMoney(amountTotal)}</span>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded bg-yellow py-3 font-semibold uppercase text-white hover:bg-yellowDark"
          >
            confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}
