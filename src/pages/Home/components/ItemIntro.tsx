import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ItemIntroProps {
  title: string
  colorClass: string
  textColor: string
  icon: ElementType
}

export function ItemIntro({
  title,
  colorClass,
  textColor,
  icon: Icon,
}: ItemIntroProps) {
  return (
    <div className="flex items-center gap-3 font-normal">
      <button className={twMerge('rounded-full  p-2', colorClass)}>
        <Icon weight="fill" className={twMerge('h-4 w-4 ', textColor)} />
      </button>
      <span>{title}</span>
    </div>
  )
}
