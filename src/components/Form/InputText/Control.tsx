import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {
  hasSuffix?: boolean
}

export function Control({ hasSuffix, ...props }: ControlProps) {
  return (
    <input
      {...props}
      type="text"
      className={twMerge(
        props.className,
        'rounded bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark',
        hasSuffix ? '' : 'border border-baseButton',
      )}
    />
  )
}
