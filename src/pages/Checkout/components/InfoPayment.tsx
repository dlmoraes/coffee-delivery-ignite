import { CurrencyDollar } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { typesPayment } from '../../../constants'
import { HeaderCard } from './HeaderCard'
import { InputPayment } from './InputPayment'

export function InfoPayment() {
  const { register, formState } = useFormContext()

  const errorMsg = formState.errors.payment?.message?.toString()

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
            <InputPayment.Control
              key={item.labelText}
              labelText={item.labelText}
              icon={item.icon}
              {...register('payment')}
            />
          )
        })}
      </div>
      <div className="-mb-2 mt-4">
        <span className="text-bodyS font-medium text-red-800">{errorMsg}</span>
      </div>
    </div>
  )
}
