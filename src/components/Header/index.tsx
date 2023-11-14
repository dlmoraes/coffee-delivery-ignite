import { MapPin } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { ButtonCart } from '../ButtonCart'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="flex justify-between pt-8">
      <NavLink to="/" title="Home">
        <Logo />
      </NavLink>

      <div className="flex gap-4">
        <button className="flex items-center justify-between gap-2 rounded-md bg-purpleLight px-3 py-2 text-purpleDark">
          <MapPin weight="fill" className="h-6 w-6 text-purple" />
          Porto Alegre, RS
        </button>

        <NavLink to="/checkout" title="Checkout">
          <ButtonCart />
        </NavLink>
      </div>
    </header>
  )
}
