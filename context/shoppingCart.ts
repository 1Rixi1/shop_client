import { createDomain } from 'effector'
import { ShoppingCartType } from '@/types/shoppingCart'

const shoppingCart = createDomain()

const setShoppingCart = shoppingCart.createEvent<ShoppingCartType[]>()

export const $shoppingCart = shoppingCart
  .createStore<ShoppingCartType[]>([])
  .on(setShoppingCart, (_, shoppingCart) => shoppingCart)
