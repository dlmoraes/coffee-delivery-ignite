import { ElementType, InputHTMLAttributes, forwardRef, useId } from 'react'

export interface InputPaymentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ElementType
  labelText: string
}

const InputPaymentInput = forwardRef<HTMLInputElement, InputPaymentProps>(
  (props, ref) => {
    const id = useId()
    const { labelText, ...props_ } = props

    return (
      <label
        className="checkbox-label flex items-center gap-3 rounded bg-baseButton p-4 text-baseText focus-within:bg-purpleLight hover:bg-baseHover "
        htmlFor={id}
      >
        <props.icon className="m-0 h-4 text-purple" />
        <input
          {...props_}
          ref={ref}
          type="radio"
          className="hidden"
          id={id}
          value={labelText}
        />
        <span className="text-buttonM font-normal uppercase">{labelText}</span>
      </label>
    )
  },
)

InputPaymentInput.displayName = 'InputPayment.Input'

export const InputPayment = { Control: InputPaymentInput }
