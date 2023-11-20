import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface SuffixProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  textSuffix: string
}

export function Suffix({ children, textSuffix, className }: SuffixProps) {
  return (
    <div
      className={twMerge(
        'flex items-center justify-between gap-2 rounded border border-baseButton bg-baseInput',
        className,
      )}
    >
      {children}
      <span className="mr-2 text-xs italic text-baseLabel">{textSuffix}</span>
    </div>
  )
}
