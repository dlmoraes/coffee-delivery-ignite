import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import imgCheckoutSuccess from '../../assets/checkoutsuccess.svg'

export interface CheckoutSuccessProps {}

export function CheckoutSuccess() {
  return (
    <div className="mt-20 space-y-10">
      <div className="flex flex-col gap-2">
        <span className="font-display text-titleL font-extrabold text-yellowDark">
          Uhu! Pedido confirmado
        </span>
        <span className="text-bodyL font-normal text-baseSubtitle">
          Agora é só aguardar que logo o café chegará até você
        </span>
      </div>
      <div className="grid grid-cols-2 gap-28">
        <div className="radius-card">
          <div className="radius-card w-full bg-gradient-to-r from-yellow via-red-500 to-purple p-0.5">
            <div className="radius-card flex flex-col gap-8 bg-background p-10">
              <div className="flex items-center gap-3">
                <button className="rounded-full bg-purple p-3">
                  <MapPin weight="fill" className="h-5 w-5 text-white" />
                </button>
                <div className="flex flex-col text-bodyM text-baseText">
                  <span>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </span>
                  <span>Farrapos - Porto Alegre, RS</span>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <button className="rounded-full bg-yellow p-3">
                  <Timer weight="fill" className="h-5 w-5 text-white" />
                </button>
                <div className="flex flex-col text-bodyM text-baseText">
                  <span>Previsão de entrega</span>
                  <strong>20 min - 30 min</strong>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <button className="rounded-full bg-yellowDark p-3">
                  <CurrencyDollar className="h-5 w-5 text-white" />
                </button>
                <div className="flex flex-col text-bodyM text-baseText">
                  <span>Pagamento na entrega</span>
                  <strong>Cartão de Crédito</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={imgCheckoutSuccess} alt="" />
      </div>
    </div>
  )
}
