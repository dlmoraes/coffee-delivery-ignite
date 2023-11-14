import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { InputNumber } from '../../components/Form/InputNumber'
import checkoutFake from '../../data/checkoutFake'

export interface ItemCoffeeCheckoutProps {
  imgSrc: string
  title: string
  qty: number
  value: number
}

export function Checkout() {
  const checkoutCoffeeItens = checkoutFake

  const [typePayment, setTypePayment] = useState(
    null as 'CREDIT' | 'DEBIT' | 'MONEY' | null,
  )

  function handleSetCreditWithPayment() {
    setTypePayment('CREDIT')
  }
  function handleSetDebitWithPayment() {
    setTypePayment('DEBIT')
  }
  function handleSetMoneyWithPayment() {
    setTypePayment('MONEY')
  }

  function formatNumber(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(value)
  }

  function amountByItem(value: number, qty: number) {
    const result = value * qty
    return formatNumber(result)
  }

  return (
    <div className="grid grid-cols-2 gap-x-8 pt-20">
      <div className="flex flex-col">
        <div className="text-titleXS font-display">Complete seu pedido</div>
        <div className="mt-4 rounded-md bg-baseCard p-10">
          <div className="flex gap-x-3">
            <MapPinLine className="mt-1 h-5 w-5 text-yellowDark" />
            <div className="flex flex-col">
              <span className="text-bodyM text-baseSubtitle">
                Endereço de Entrega
              </span>
              <span className="text-bodyS text-baseText">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </div>
          <form id="checkoutForm" className="flex flex-col gap-4 pt-8">
            <div>
              <input
                type="text"
                placeholder="CEP"
                className="placeholder:text-bodyS rounded border border-baseButton bg-baseInput p-3 focus:outline-yellowDark"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                className="placeholder:text-bodyS w-full rounded border border-baseButton bg-baseInput p-3 focus:outline-yellowDark"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Número"
                className="placeholder:text-bodyS rounded border border-baseButton bg-baseInput p-3 focus:outline-yellowDark"
              />
              <div className="rounded border border-baseButton bg-baseInput">
                <input
                  type="text"
                  placeholder="Complemento"
                  className="placeholder:text-bodyS rounded bg-transparent p-3 focus:outline-yellowDark"
                />
                <span className="text-xs italic text-baseLabel">Opcional</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Bairro"
                className="placeholder:text-bodyS rounded border border-baseButton bg-baseInput p-3 focus:outline-yellowDark"
              />
              <input
                type="text"
                placeholder="Cidade"
                className="placeholder:text-bodyS rounded border border-baseButton bg-baseInput p-3 focus:outline-yellowDark"
              />
              <input
                type="text"
                placeholder="UF"
                className="placeholder:text-bodyS w-14 rounded border border-baseButton bg-baseInput p-3 focus:outline-yellowDark"
              />
            </div>
          </form>
        </div>

        <div className="mt-3 rounded-md bg-baseCard p-10">
          <div className="flex gap-x-3">
            <CurrencyDollar className="mt-1 h-5 w-5 text-purple" />
            <div className="flex flex-col">
              <span className="text-bodyM text-baseSubtitle">Pagamento</span>
              <span className="text-bodyS text-baseText">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <div className="flex gap-4 pt-8">
            <button
              type="button"
              data-selected-type-payment={
                typePayment === 'CREDIT' ? 'active' : ''
              }
              onClick={handleSetCreditWithPayment}
              className="flex items-center gap-4 rounded bg-baseButton p-4 text-baseText hover:bg-baseHover data-[selected-type-payment=active]:bg-purpleLight"
            >
              <CreditCard className="h-4 w-4 text-purple" />
              <span className="text-buttonM font-normal uppercase">
                cartão de crédito
              </span>
            </button>
            <button
              type="button"
              data-selected-type-payment={
                typePayment === 'DEBIT' ? 'active' : ''
              }
              onClick={handleSetDebitWithPayment}
              className="flex items-center gap-4 rounded bg-baseButton p-4 text-baseText data-[selected-type-payment=active]:bg-purpleLight"
            >
              <Bank className="h-4 w-4 text-purple" />
              <span className="text-buttonM font-normal uppercase">
                cartão de débito
              </span>
            </button>
            <button
              type="button"
              data-selected-type-payment={
                typePayment === 'MONEY' ? 'active' : ''
              }
              onClick={handleSetMoneyWithPayment}
              className="flex items-center gap-4 rounded bg-baseButton p-4 text-baseText data-[selected-type-payment=active]:bg-purpleLight"
            >
              <Money className="h-4 w-4 text-purple" />
              <span className="text-buttonM font-normal uppercase">
                dinheiro
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-titleXS font-display">Cafés selecionados</div>
        <div className="radius-card mt-4 bg-baseCard p-10">
          <div className="flex flex-col">
            {checkoutCoffeeItens.map((item) => {
              return (
                <>
                  <div
                    key={item.title}
                    className="flex items-center justify-between"
                  >
                    <div className="flex gap-x-5">
                      <img src={item.imgSrc} alt="" />
                      <div className="flex flex-col gap-2">
                        <span className="text-bodyM">{item.title}</span>
                        <div className="flex items-center gap-2">
                          <InputNumber />
                          <button
                            type="button"
                            className="flex items-center gap-4 rounded bg-baseButton p-2.5 text-baseText hover:bg-baseHover"
                          >
                            <Trash className="h-4 w-4 text-purple" />
                            <span className="text-buttonM font-normal uppercase">
                              remover
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      R${' '}
                      <div className="text-bodyM font-semibold">
                        {amountByItem(item.value, item.qty)}
                      </div>
                    </div>
                  </div>

                  <div className="my-6 h-0.5 w-full bg-baseButton"></div>
                </>
              )
            })}

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-bodyS">Total de itens</span>
                <span className="text-bodyS">R$ 29,70</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-bodyS">Entrega</span>
                <span className="text-bodyS">R$ 3,50</span>
              </div>
              <div className="text-bodyL flex items-center justify-between font-bold text-baseSubtitle">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </div>
            <button
              type="submit"
              form="checkoutForm"
              className="mt-6 w-full rounded bg-yellow py-3 font-semibold uppercase text-white hover:bg-yellowDark"
            >
              confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
