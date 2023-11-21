import { MapPinLine } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { InputText } from '../../../components/Form/InputText'
import { HeaderCard } from './HeaderCard'

export function InfoAddress() {
  const { register } = useFormContext()

  return (
    <div className="mt-4 rounded-md bg-baseCard p-10">
      <HeaderCard
        icon={MapPinLine}
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <div className="flex flex-col gap-4 pt-8">
        <InputText.Root>
          <InputText.Control
            id="cep"
            placeholder="CEP"
            maxLength={9}
            pattern="/d"
            {...register('cep', { valueAsNumber: true })}
          />
        </InputText.Root>
        <InputText.Root>
          <InputText.Control
            id="street"
            placeholder="Rua"
            className="w-full"
            {...register('street')}
          />
        </InputText.Root>
        <div className="flex">
          <InputText.Root>
            <InputText.Control
              id="number"
              className="w-10/12"
              placeholder="Número"
              {...register('number')}
            />
          </InputText.Root>
          <InputText.Root className="-ml-5 flex-1">
            <InputText.Suffix textSuffix="Opcional">
              <InputText.Control
                id="complement"
                className="w-full"
                placeholder="Complemento"
                {...register('complement')}
              />
            </InputText.Suffix>
          </InputText.Root>
        </div>
        <div className="flex gap-4">
          <InputText.Root className="w-2/3">
            <InputText.Control
              id="district"
              className=" w-full"
              placeholder="Bairro"
              {...register('district')}
            />
          </InputText.Root>
          <InputText.Root className="w-full">
            <InputText.Control
              id="city"
              placeholder="Cidade"
              className="w-full"
              {...register('city')}
            />
          </InputText.Root>
          <InputText.Root>
            <InputText.Control
              id="state"
              placeholder="UF"
              className="w-full"
              {...register('state')}
            />
          </InputText.Root>
        </div>
      </div>
    </div>
  )
}
