import { Bank, CreditCard, Money } from '@phosphor-icons/react'

export const localStorageDefine = '@ignite-coffee-delivery:checkout-state-1.0.0'

export const typesPayment = [
  { labelText: 'Cartão de Crédito', icon: CreditCard },
  { labelText: 'Cartão de Débito', icon: Bank },
  { labelText: 'Dinheiro', icon: Money },
]

export const deliveryFeeValue = 3.5
