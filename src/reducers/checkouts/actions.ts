// eslint-disable-next-line prettier/prettier
import { CartItem, CompleteOrder, DeliveryInformation } from './reducer';

export enum ActionTypes {
  ADD_NEW_ITEM_CART = 'ADD_NEW_ITEM_CART',
  REMOVE_NEW_ITEM_CART = 'REMOVE_NEW_ITEM_CART',
  CHANGE_QTY_ITEM_CART = 'CHANGE_QTY_ITEM_CART',
  ADD_INFO_DELIVERY = 'ADD_INFO_DELIVERY',
  COMPLETE_ORDER = 'COMPLETE_ORDER',
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_NEW_ITEM_CART; payload: CartItem }
  | { type: ActionTypes.REMOVE_NEW_ITEM_CART; payload: string }
  | {
      type: ActionTypes.CHANGE_QTY_ITEM_CART
      payload: {
        id: string
        qty: number
      }
    }
  | { type: ActionTypes.ADD_INFO_DELIVERY; payload: DeliveryInformation }
  | { type: ActionTypes.COMPLETE_ORDER; payload: CompleteOrder }

export function addItemToCart(newItem: CartItem): ActionTypesProps {
  return {
    type: ActionTypes.ADD_NEW_ITEM_CART,
    payload: {
      ...newItem,
    },
  }
}

export function removeItemFromCart(id: string): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_NEW_ITEM_CART,
    payload: id,
  }
}

export function changeQtyToItemFromCart(
  id: string,
  qty: number,
): ActionTypesProps {
  return {
    type: ActionTypes.CHANGE_QTY_ITEM_CART,
    payload: { id, qty },
  }
}

export function addInfoDelivery(
  newInfo: DeliveryInformation,
): ActionTypesProps {
  return {
    type: ActionTypes.ADD_INFO_DELIVERY,
    payload: {
      ...newInfo,
    },
  }
}

export function setCompleteOrder(item: CompleteOrder): ActionTypesProps {
  return {
    type: ActionTypes.COMPLETE_ORDER,
    payload: item,
  }
}
