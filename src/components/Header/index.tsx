import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="flex justify-between">
      <Logo />

      <div className="flex gap-4">
        <button className="flex items-center justify-between gap-2 rounded-md bg-purpleLight px-3 py-2 text-purpleDark">
          <MapPin weight="fill" className="h-6 w-6 text-purple" />
          Porto Alegre, RS
        </button>

        <button className="rounded-md bg-yellowLight p-2">
          <ShoppingCart weight="fill" className="h-6 w-6 text-yellowDark" />
        </button>
      </div>
    </header>
  )
}
