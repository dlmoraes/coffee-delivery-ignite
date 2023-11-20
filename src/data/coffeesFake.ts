import { v4 as uuidv4 } from 'uuid'
import americanoImg from '../assets/coffee/Americano.png'
import arabeImg from '../assets/coffee/Arabe.png'
import cafeGeladoImg from '../assets/coffee/Cafe Gelado.png'
import cafeComLeiteImg from '../assets/coffee/Cafe com Leite.png'
import capuccinoImg from '../assets/coffee/Capuccino.png'
import chocolateQuenteImg from '../assets/coffee/Chocolate Quente.png'
import cubanoImg from '../assets/coffee/Cubano.png'
import expressoCremosoImg from '../assets/coffee/Expresso Cremoso.png'
import expressoTradImg from '../assets/coffee/Expresso.png'
import havaianoImg from '../assets/coffee/Havaiano.png'
import irlandesImg from '../assets/coffee/Irlandes.png'
import latteImg from '../assets/coffee/Latte.png'
import macchiatoImg from '../assets/coffee/Macchiato.png'
import mochaccinoImg from '../assets/coffee/Mochaccino.png'
import { Coffee } from '../pages/Home/components/ItemCoffee'

export default [
  {
    id: uuidv4(),
    imgSrc: expressoTradImg,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: americanoImg,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: expressoCremosoImg,
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: cafeGeladoImg,
    tags: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: cafeComLeiteImg,
    tags: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: latteImg,
    tags: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: capuccinoImg,
    tags: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: macchiatoImg,
    tags: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: mochaccinoImg,
    tags: ['Tradicional', 'Com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: chocolateQuenteImg,
    tags: ['Especial', 'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: cubanoImg,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: havaianoImg,
    tags: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: arabeImg,
    tags: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
  },
  {
    id: uuidv4(),
    imgSrc: irlandesImg,
    tags: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
  },
] as Coffee[]
