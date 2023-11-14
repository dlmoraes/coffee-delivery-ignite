import expressoTradImg from '../assets/coffee/Expresso.png'
import latteImg from '../assets/coffee/Latte.png'
import { ItemCoffeeCheckoutProps } from '../pages/Checkout'

export default [
  {
    imgSrc: expressoTradImg,
    qty: 1,
    title: 'Expresso Tradicional',
    value: 9.9,
  },
  {
    imgSrc: latteImg,
    qty: 2,
    title: 'Latte',
    value: 9.9,
  },
] as ItemCoffeeCheckoutProps[]
