import { MapPinLine } from '@phosphor-icons/react'
import { ChangeEvent } from 'react'
import { InputText } from '../../../components/Form/InputText'
import { DeliveryInformation } from '../../../reducers/checkouts/reducer'
import { HeaderCard } from './HeaderCard'

export interface InfoAddressProps {
  formInfo: DeliveryInformation
  onChange: (name: string, value: string) => void
}

export function InfoAddress({ formInfo, onChange }: InfoAddressProps) {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target
    const { name, value } = target

    onChange(name, value)
  }

  return (
    <div className="mt-4 rounded-md bg-baseCard p-10">
      <HeaderCard
        icon={MapPinLine}
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <div className="flex flex-col gap-4 pt-8">
        <InputText.Root>
          <InputText.Group>
            <InputText.Control
              placeholder="CEP"
              name="cep"
              value={formInfo.cep}
              onChange={handleInputChange}
            />
          </InputText.Group>
        </InputText.Root>
        <InputText.Root>
          <InputText.Control
            placeholder="Rua"
            name="street"
            className="w-full"
            value={formInfo.street}
            onChange={handleInputChange}
          />
        </InputText.Root>
        <div className="grid grid-cols-form2 gap-4">
          <InputText.Root>
            <InputText.Control placeholder="Número" name="number" />
          </InputText.Root>
          <InputText.Root>
            <InputText.Suffix textSuffix="Opcional">
              <InputText.Control
                hasSuffix
                className="flex-1"
                placeholder="Complemento"
                name="complement"
                value={formInfo.complement}
                onChange={handleInputChange}
              />
            </InputText.Suffix>
          </InputText.Root>
        </div>
        <div className="grid grid-cols-form gap-4">
          <InputText.Root>
            <InputText.Control
              placeholder="Bairro"
              name="district"
              value={formInfo.district}
              onChange={handleInputChange}
            />
          </InputText.Root>
          <InputText.Root>
            <InputText.Control
              placeholder="Cidade"
              name="city"
              value={formInfo.city}
              onChange={handleInputChange}
            />
          </InputText.Root>
          <InputText.Root>
            <InputText.Control
              placeholder="UF"
              name="state"
              value={formInfo.state}
              onChange={handleInputChange}
            />
          </InputText.Root>
        </div>
      </div>
    </div>
  )
}
