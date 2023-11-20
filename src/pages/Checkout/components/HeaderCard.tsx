import { ElementType } from 'react'

export interface HeaderCardProps {
  title: string
  subtitle: string
  icon: ElementType
}

export function HeaderCard({ icon: Icon, ...props }: HeaderCardProps) {
  return (
    <div className="flex gap-x-3">
      <Icon className="mt-1 h-5 w-5 text-yellowDark" />
      <div className="flex flex-col">
        <span className="text-bodyM text-baseSubtitle">{props.title}</span>
        <span className="text-bodyS text-baseText">{props.subtitle}</span>
      </div>
    </div>
  )
}
