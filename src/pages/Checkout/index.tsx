import { FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckoutContext } from '../../context/CheckoutContext'
import { DeliveryInformation } from '../../reducers/checkouts/reducer'
import { CoffeesSelected } from './components/CoffeesSelected'
import { EmptyCart } from './components/EmptyCart'
import { InfoAddress } from './components/InfoAddress'
import { InfoPayment } from './components/InfoPayment'

const initialValues = {
  cep: '',
  city: '',
  district: '',
  number: '',
  state: '',
  street: '',
  complement: '',
} as DeliveryInformation

export function Checkout() {
  const { qtyItemsToCart, addInfoDelivery, setCompleteOrder } =
    useContext(CheckoutContext)
  const navigate = useNavigate()

  const cartIsEmpty = qtyItemsToCart === 0
  const [formInfo, setFormInfo] = useState(initialValues)
  const [paymentType, setPaymentType] = useState('')

  function handleInputChange(name: string, value: string) {
    setFormInfo({
      ...formInfo,
      [name]: value,
    })
  }

  function handleSelectTypePayment(value: string) {
    setPaymentType(value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setCompleteOrder(paymentType)
    addInfoDelivery(formInfo)

    navigate('/checkout-success', { replace: true })
  }

  return (
    <form id="checkoutForm" onSubmit={handleSubmit}>
      {!cartIsEmpty ? (
        <div className="grid grid-cols-formCheckoutCards gap-x-8">
          <div className="flex flex-col">
            <div className="font-display text-titleXS">Complete seu pedido</div>
            <InfoAddress formInfo={formInfo} onChange={handleInputChange} />

            <InfoPayment
              valueSelected={paymentType}
              onChange={handleSelectTypePayment}
            />
          </div>

          <CoffeesSelected />
        </div>
      ) : (
        <EmptyCart />
      )}
    </form>
  )
}
