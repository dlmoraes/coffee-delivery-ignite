import { ShoppingCart } from '@phosphor-icons/react'
import { InputNumber } from '../../../components/Form/InputNumber'

export interface ItemCoffeeProps {
  imgSrc: string
  tags: string[]
  title: string
  description: string
  value: number
}

export function ItemCoffee({
  imgSrc,
  tags,
  title,
  description,
  value,
}: ItemCoffeeProps) {
  function formatNumber() {
    return new Intl.NumberFormat('pt-BR', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="radius-card flex flex-col items-center justify-center bg-baseCard px-5 pb-5">
      <img
        className="mb-1 h-28 w-28 -translate-y-5 object-cover"
        src={imgSrc}
        alt={`Imagem de uma xícara de ${title}`}
      />
      <div className="flex items-center gap-1">
        {tags.map((tag) => {
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
        {title}
      </div>
      <div className="text-center text-sm leading-13 text-baseLabel">
        {description}
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1">
          R$ <div className="font-display text-2xl">{formatNumber()}</div>
        </div>
        <div className="flex flex-1 gap-x-2">
          <InputNumber />
          <button className="rounded-md bg-purpleDark p-2 hover:bg-purple">
            <ShoppingCart weight="fill" className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
