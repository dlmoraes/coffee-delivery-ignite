import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import imgCheckoutSuccess from '../../assets/checkoutsuccess.svg'
import { CheckoutContext } from '../../context/CheckoutContext'
import { Header } from './components/Header'

export function CheckoutSuccess() {
  const { deliveryInfo, payment } = useContext(CheckoutContext)

  const address = `${deliveryInfo.street}, ${deliveryInfo.number}`
  const complementAddress = `${deliveryInfo.district} - ${deliveryInfo.city}, ${deliveryInfo.state}`

  return (
    <div className="mt-20 space-y-10">
      <Header
        title="Uhu! Pedido confirmado"
        subtitle="Agora é só aguardar que logo o café chegará até você"
      />
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
                    Entrega em <strong>{address}</strong>
                  </span>
                  <span> {complementAddress}</span>
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
                  <strong>{payment}</strong>
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
