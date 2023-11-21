import {
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react'
import { twMerge } from 'tailwind-merge'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {
  hasSuffix?: boolean
}

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface SuffixProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  textSuffix: string
}

export function SuffixInput({ children, textSuffix, className }: SuffixProps) {
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

export function RootInput(props: RootProps) {
  return <div {...props} />
}

const InputTextText = forwardRef<HTMLInputElement, ControlProps>(
  (props, ref) => {
    const { hasSuffix, ...props_ } = props
    return (
      <input
        {...props_}
        ref={ref}
        className={twMerge(
          props.className,
          'rounded bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark',
          hasSuffix ? '' : 'border border-baseButton',
          props.type === 'number' ? 'remove-arrow' : '',
        )}
      />
    )
  },
)

InputTextText.displayName = 'InputText.Input'

export const InputText = {
  Root: RootInput,
  Control: InputTextText,
  Suffix: SuffixInput,
}
