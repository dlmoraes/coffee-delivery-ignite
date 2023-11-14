import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { ItemIntro } from './ItemIntro'

export function ListIntros() {
  return (
    <div className="grid grid-cols-2 gap-y-5 pt-16">
      <ItemIntro
        title="Compra simples e segura"
        textColor="text-white"
        colorClass="bg-yellowDark"
        icon={ShoppingCart}
      />
      <ItemIntro
        title="Embalagem mantém o café intacto"
        textColor="text-white"
        colorClass="bg-baseText"
        icon={Package}
      />
      <ItemIntro
        title="Entrega rápida e rastreada"
        textColor="text-white"
        colorClass="bg-yellow"
        icon={Timer}
      />
      <ItemIntro
        title="O café chega fresquinho até você"
        textColor="text-white"
        colorClass="bg-purple"
        icon={Coffee}
      />
    </div>
  )
}
