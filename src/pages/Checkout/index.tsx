import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
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
    <form
      id="checkoutForm"
      className="grid grid-cols-formCheckoutCards gap-x-8"
    >
      <div className="flex flex-col">
        <div className="font-display text-titleXS">Complete seu pedido</div>
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
          <div className="flex flex-col gap-4 pt-8">
            <div>
              <input
                type="text"
                placeholder="CEP"
                className="rounded border border-baseButton bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark"
                value="90250-440"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                className="w-full rounded border border-baseButton bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark"
                value="Rua João Daniel Martinelli"
              />
            </div>
            <div className="grid grid-cols-form2 gap-4">
              <input
                type="text"
                placeholder="Número"
                className="rounded border border-baseButton bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark"
                value="102"
              />
              <div className="flex items-center justify-between gap-2 rounded border border-baseButton bg-baseInput">
                <input
                  type="text"
                  placeholder="Complemento"
                  className="flex-1 rounded bg-transparent p-3 placeholder:text-bodyS focus:outline-yellowDark"
                />
                <span className="mr-2 text-xs italic text-baseLabel">
                  Opcional
                </span>
              </div>
            </div>
            <div className="grid grid-cols-form gap-4">
              <input
                type="text"
                placeholder="Bairro"
                className="rounded border border-baseButton bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark"
                value="Farrapos"
              />
              <input
                type="text"
                placeholder="Cidade"
                className="rounded border border-baseButton bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark"
                value="Porto Alegre"
              />
              <input
                type="text"
                placeholder="UF"
                className="rounded border border-baseButton bg-baseInput p-3 placeholder:text-bodyS focus:outline-yellowDark"
                value="RS"
              />
            </div>
          </div>
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
          <div className="grid grid-cols-formCards gap-4 pt-8">
            <label
              className="flex items-center gap-4 rounded bg-baseButton p-4 text-baseText focus-within:bg-purpleLight hover:bg-baseHover group-checked:bg-purpleLight peer-checked:bg-teal-300"
              htmlFor="cartaoCredito"
            >
              <CreditCard className="m-0 h-4 text-purple" />
              <span className="text-buttonM font-normal uppercase">
                CARTÃO DE CRÉDITO
              </span>
              <input
                type="radio"
                className="sr-only appearance-none"
                name="typePayment"
                id="cartaoCredito"
              />
            </label>
            <label
              className="flex items-center gap-4 rounded bg-baseButton p-4 text-baseText focus-within:bg-purpleLight hover:bg-baseHover group-checked:bg-purpleLight"
              htmlFor="cartaoDebito"
            >
              <Bank className="m-0 h-4 text-purple" />
              <span className="text-buttonM font-normal uppercase">
                CARTÃO DE DÉBITO
              </span>
              <input
                type="radio"
                className="sr-only appearance-none"
                name="typePayment"
                id="cartaoDebito"
              />
            </label>
            <label
              className="flex items-center gap-4 rounded bg-baseButton p-4 text-baseText focus-within:bg-purpleLight hover:bg-baseHover group-checked:bg-purpleLight"
              htmlFor="dinheiro"
            >
              <Money className="m-0 h-4 text-purple" />
              <span className="text-buttonM font-normal uppercase">
                DINHEIRO
              </span>
              <input
                type="radio"
                className="sr-only appearance-none"
                name="typePayment"
                id="dinheiro"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="font-display text-titleXS">Cafés selecionados</div>
        <div className="radius-card mt-4 bg-baseCard p-10">
          <div className="flex w-full flex-col">
            {checkoutCoffeeItens.map((item) => {
              return (
                <div key={item.title}>
                  <div className="flex gap-x-5">
                    <img src={item.imgSrc} alt="" />
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-bodyM">{item.title}</span>
                        <div className="flex items-center gap-1">
                          R${' '}
                          <div className="text-bodyM font-semibold">
                            {amountByItem(item.value, item.qty)}
                          </div>
                        </div>
                      </div>
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

                  <div className="my-6 h-0.5 w-full bg-baseButton"></div>
                </div>
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
              <div className="flex items-center justify-between text-bodyL font-bold text-baseSubtitle">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </div>
            <NavLink to="/checkout-success">
              <button
                type="submit"
                form="checkoutForm"
                className="mt-6 w-full rounded bg-yellow py-3 font-semibold uppercase text-white hover:bg-yellowDark"
              >
                confirmar pedido
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  )
}
