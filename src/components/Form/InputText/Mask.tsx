import { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'
import { twMerge } from 'tailwind-merge'

export interface MaskControlProps
  extends InputHTMLAttributes<HTMLInputElement> {
  hasSuffix?: boolean
  mask: string
}

export function MaskControl({
  hasSuffix,
  mask,
  className,
  ...props
}: MaskControlProps) {
  return (
    <InputMask
      {...props}
      mask={mask}
      type="text"
      className={twMerge(
        className,
        'rounded bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark',
        hasSuffix ? '' : 'border border-baseButton',
      )}
    />
  )
}
