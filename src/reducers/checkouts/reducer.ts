import { produce } from 'immer'
import { Coffee } from '../../pages/Home/components/ItemCoffee'
import { ActionTypes, ActionTypesProps } from './actions'

export enum StatusTypes {
  WAITING = 'WAITING',
  IN_PROGRESS = 'IN_PROGRESS',
  DELIVERED = 'DELIVERED',
}

export interface CartItem {
  id: string
  coffeeItem: Coffee
  qty: number
}

export interface DeliveryInformation {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
}

interface CheckoutsState {
  cartItems: CartItem[]
  deliveryInfo: DeliveryInformation
  itemId: string | null
  payment: string
  amountItens: number
  amountTotal: number
  deliveryFeeTotal: number
  qtyItemsToCart: number
  status: StatusTypes
}

export interface CompleteOrder {
  payment: string
  amountItens: number
  amountTotal: number
  deliveryFeeTotal: number
  qtyItemsToCart: number
}

export function checkoutReducer(
  state: CheckoutsState,
  action: ActionTypesProps,
) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM_CART: {
      return produce(state, (draft) => {
        draft.cartItems.push(action.payload)
        draft.status = StatusTypes.WAITING
      })
    }
    case ActionTypes.REMOVE_NEW_ITEM_CART: {
      return produce(state, (draft) => {
        const idx = draft.cartItems.findIndex(
          (item) => item.id === action.payload,
        )
        draft.cartItems.splice(idx, 1)
      })
    }
    case ActionTypes.CHANGE_QTY_ITEM_CART: {
      return produce(state, (draft) => {
        const idx = draft.cartItems.findIndex(
          (item) => item.id === action.payload.id,
        )

        if (idx > -1) draft.cartItems[idx].qty = action.payload.qty
      })
    }
    case ActionTypes.ADD_INFO_DELIVERY: {
      return produce(state, (draft) => {
        draft.deliveryInfo = action.payload
      })
    }
    case ActionTypes.COMPLETE_ORDER: {
      return produce(state, (draft) => {
        draft.payment = action.payload.payment
        draft.amountItens = action.payload.amountItens
        draft.amountTotal = action.payload.amountTotal
        draft.deliveryFeeTotal = action.payload.deliveryFeeTotal
        draft.qtyItemsToCart = action.payload.qtyItemsToCart

        draft.status = StatusTypes.IN_PROGRESS
      })
    }
    default:
      return state
  }
}
