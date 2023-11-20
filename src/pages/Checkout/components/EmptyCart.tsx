import Lottie from 'lottie-react'
import { NavLink } from 'react-router-dom'
import animationData from '../../../assets/lottie/CoffeeEmptyCart.json'

export function EmptyCart() {
  return (
    <div className="flex flex-col gap-10">
      <div className="mx-auto w-7/12">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="space-y-8 text-center">
        <div className="font-display text-titleXl font-medium">
          Sem nada no carrinho
        </div>
        <div>
          <NavLink to="/">
            <button
              className="rounded bg-yellowDark p-4 font-medium text-white hover:bg-yellow"
              type="button"
            >
              Ir para página principal
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
