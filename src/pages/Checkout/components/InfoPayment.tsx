import { CurrencyDollar } from '@phosphor-icons/react'
import { typesPayment } from '../../../constants'
import { HeaderCard } from './HeaderCard'
import { InputPayment } from './InputPayment'

export interface InfoPaymentProps {
  valueSelected: string
  onChange: (value: string) => void
}

export function InfoPayment({ valueSelected, onChange }: InfoPaymentProps) {
  function handleInputChange(value: string) {
    onChange(value)
  }

  return (
    <div className="mt-3 rounded-md bg-baseCard p-10">
      <HeaderCard
        icon={CurrencyDollar}
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <div className="grid grid-cols-formCards gap-4 pt-8">
        {typesPayment.map((item) => {
          return (
            <InputPayment
              key={item.labelText}
              labelText={item.labelText}
              icon={item.icon}
              onChange={handleInputChange}
              valueSelected={valueSelected}
            />
          )
        })}
      </div>
    </div>
  )
}
