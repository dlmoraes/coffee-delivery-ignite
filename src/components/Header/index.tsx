import { MapPin } from '@phosphor-icons/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BrazilUF from '../../data/brazilStates.json'
import { ButtonCart } from '../ButtonCart'
import { Logo } from './Logo'

export function Header() {
  const [cityStateCurrent, setCityStateCurrent] = useState('Porto Alegre, RS')

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((location) => {
      const { coords } = location
      if (coords) {
        const { latitude, longitude } = coords
        fetch(
          `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`,
        ).then((res) => {
          res.json().then((data) => {
            const { address } = data
            const uf = BrazilUF[address.state as keyof typeof BrazilUF]
            setCityStateCurrent(`${address.city}, ${uf}`)
          })
        })
      }
    })
  }

  return (
    <header className="sticky top-0 z-10 mb-20 flex items-center justify-between bg-background py-8">
      <NavLink to="/" title="Home">
        <Logo />
      </NavLink>

      <div className="flex gap-4">
        <button
          onClick={getCurrentLocation}
          className="flex items-center justify-between gap-2 rounded-md bg-purpleLight px-3 py-2 text-purpleDark"
        >
          <MapPin weight="fill" className="h-6 w-6 text-purple" />
          <span>{cityStateCurrent}</span>
        </button>

        <ButtonCart />
      </div>
    </header>
  )
}
