import { ChangeEvent, ElementType, useId } from 'react'

export interface InputPaymentProps {
  icon: ElementType
  labelText: string
  valueSelected: string
  onChange: (value: string) => void
}

export function InputPayment({
  icon: Icon,
  labelText,
  valueSelected,
  onChange,
}: InputPaymentProps) {
  const id = useId()

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }

  const isChecked = valueSelected === labelText

  return (
    <label
      className="checkbox-label flex items-center gap-3 rounded bg-baseButton p-4 text-baseText focus-within:bg-purpleLight hover:bg-baseHover "
      htmlFor={id}
    >
      <Icon className="m-0 h-4 text-purple" />
      <input
        onChange={handleOnChange}
        type="radio"
        className="hidden"
        name="typePayment"
        id={id}
        value={labelText}
        defaultChecked={isChecked}
      />
      <span className="text-buttonM font-normal uppercase">{labelText}</span>
    </label>
  )
}
