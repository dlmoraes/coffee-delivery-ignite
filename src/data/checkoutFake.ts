import { v4 as uuidv4 } from 'uuid'
import expressoTradImg from '../assets/coffee/Expresso.png'
import latteImg from '../assets/coffee/Latte.png'
import { ItemCoffeeCartProps } from '../pages/Checkout/components/ItemCoffeeCart'

export default [
  {
    id: uuidv4(),
    imgSrc: expressoTradImg,
    qty: 1,
    title: 'Expresso Tradicional',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: latteImg,
    qty: 2,
    title: 'Latte',
    value: 9.9,
  },
] as ItemCoffeeCartProps[]
