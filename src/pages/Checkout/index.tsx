import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { CheckoutContext } from '../../context/CheckoutContext'
import { DeliveryInformation } from '../../reducers/checkouts/reducer'
import { CoffeesSelected } from './components/CoffeesSelected'
import { EmptyCart } from './components/EmptyCart'
import { InfoAddress } from './components/InfoAddress'
import { InfoPayment } from './components/InfoPayment'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().max(9, 'Informe o cep'),
  street: zod.string().min(5, 'Informe a rua'),
  city: zod.string().min(3, 'Informe a cidade'),
  district: zod.string().min(3, 'Informe o bairro'),
  number: zod.string().min(1, 'Informe o número'),
  state: zod.string().min(2, 'Informe o estado/UF'),
  payment: zod.string().min(2, 'Informe o tipo de pagamento'),
  complement: zod.string().optional().nullable(),
})

type NewCheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { qtyItemsToCart, addInfoDelivery, setCompleteOrder } =
    useContext(CheckoutContext)
  const navigate = useNavigate()

  const cartIsEmpty = qtyItemsToCart === 0

  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      district: '',
      number: '',
      state: '',
      street: '',
      complement: '',
      payment: '',
    },
  })

  const { handleSubmit, formState } = newCheckoutForm

  function handleCompleteCheckout(data: NewCheckoutFormData) {
    console.log(formState.errors)
    console.log(data)
    setCompleteOrder(data.payment)
    const info = { ...data } as DeliveryInformation
    addInfoDelivery(info)
    navigate('/checkout-success', { replace: true })
  }

  return (
    <div>
      {!cartIsEmpty ? (
        <form onSubmit={handleSubmit(handleCompleteCheckout)}>
          <div className="grid grid-cols-formCheckoutCards gap-x-8">
            <div className="flex flex-col">
              <div className="font-display text-titleXS">
                Complete seu pedido
              </div>
              <FormProvider {...newCheckoutForm}>
                <InfoAddress />

                <InfoPayment />
              </FormProvider>
            </div>

            <CoffeesSelected />
          </div>
        </form>
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}
