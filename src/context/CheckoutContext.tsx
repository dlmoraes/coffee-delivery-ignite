import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import { deliveryFeeValue, localStorageDefine } from '../constants'
import {
  addInfoDelivery,
  addItemToCart,
  changeQtyToItemFromCart,
  removeItemFromCart,
  setCompleteOrder,
} from '../reducers/checkouts/actions'
import {
  CartItem,
  CompleteOrder,
  DeliveryInformation,
  StatusTypes,
  checkoutReducer,
} from '../reducers/checkouts/reducer'

export interface CheckoutContextType {
  cartItems: CartItem[]
  deliveryInfo: DeliveryInformation
  payment: string
  amountItens: number
  amountTotal: number
  deliveryFeeTotal: number
  qtyItemsToCart: number
  status: StatusTypes
  addItemToCart: (item: CartItem) => void
  removeItemToCart: (id: string) => void
  changeQtyToCart: (id: string, qty: number) => void
  addInfoDelivery: (item: DeliveryInformation) => void
  setCompleteOrder: (typePayment: string) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: React.ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkoutState, dispatch] = useReducer(
    checkoutReducer,
    {
      cartItems: [],
      status: 'WAITING',
      deliveryInfo: {
        cep: '',
        city: '',
        district: '',
        number: '',
        state: '',
        street: '',
        complement: '',
      },
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(localStorageDefine)
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cartItems, payment, deliveryInfo, status } = checkoutState

  const amountItens = useMemo(() => {
    return cartItems.reduce((acc, cur) => {
      return acc + cur.coffeeItem.value * cur.qty
    }, 0)
  }, [cartItems])

  const deliveryFeeTotal = deliveryFeeValue
  const amountTotal = amountItens + deliveryFeeTotal

  const qtyItemsToCart = useMemo(() => {
    return cartItems.length
  }, [cartItems])

  useEffect(() => {
    const stateJSON = JSON.stringify(checkoutState)

    localStorage.setItem(localStorageDefine, stateJSON)
  }, [checkoutState])

  function handleAddItemToCart(item: CartItem) {
    dispatch(addItemToCart(item))
  }

  function handleRemoveItemToCart(id: string) {
    dispatch(removeItemFromCart(id))
  }

  function handleChangeQtyToFromCart(id: string, qty: number) {
    dispatch(changeQtyToItemFromCart(id, qty))
  }

  function handleCompleteOrder(typePayment: string) {
    const item = {} as CompleteOrder

    item.payment = typePayment
    item.amountItens = amountItens
    item.amountTotal = amountTotal
    item.deliveryFeeTotal = deliveryFeeTotal
    item.qtyItemsToCart = qtyItemsToCart

    dispatch(setCompleteOrder(item))
  }

  function handleAddInfoDelivery(item: DeliveryInformation) {
    dispatch(addInfoDelivery(item))
  }

  return (
    <CheckoutContext.Provider
      value={{
        cartItems,
        deliveryInfo,
        payment,
        qtyItemsToCart,
        amountItens,
        amountTotal,
        deliveryFeeTotal,
        status,
        addItemToCart: handleAddItemToCart,
        removeItemToCart: handleRemoveItemToCart,
        changeQtyToCart: handleChangeQtyToFromCart,
        setCompleteOrder: handleCompleteOrder,
        addInfoDelivery: handleAddInfoDelivery,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
