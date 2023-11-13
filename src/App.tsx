import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import backgroundIntro from './assets/backgroudIntro.svg'
import expressoTradImg from './assets/coffee/Expresso.png'
import introImg from './assets/intro.png'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />

      <div className="z-10 flex items-center justify-between pt-24">
        <div className="absolute -z-10 flex flex-1 blur-intro">
          <img className="w-full opacity-15" src={backgroundIntro} alt="" />
        </div>
        <div>
          <div className="w-2/3 pb-4 font-display text-5xl font-extrabold leading-13 text-baseTitle">
            Encontre o café perfeito para qualquer hora do dia
          </div>
          <div className="w-2/3 text-xl leading-13 text-baseSubtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </div>
          <div className="grid grid-cols-2 gap-5 pt-16">
            <div className="flex items-center gap-3 font-normal">
              <button className="rounded-full bg-yellowDark p-2">
                <ShoppingCart weight="fill" className="h-4 w-4 text-white" />
              </button>
              <span>Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-3 font-normal">
              <button className="rounded-full bg-baseText p-2">
                <Package weight="fill" className="h-4 w-4 text-white" />
              </button>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="flex items-center gap-3 font-normal">
              <button className="rounded-full bg-yellow p-2">
                <Timer weight="fill" className="h-4 w-4 text-white" />
              </button>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="flex items-center gap-3 font-normal">
              <button className="rounded-full bg-purple p-2">
                <Coffee weight="fill" className="h-4 w-4 text-white" />
              </button>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <img src={introImg} alt="" />
      </div>

      <div className="pb-14 pt-32 font-display text-3.1xl font-extrabold leading-tight text-baseTitle">
        Nossos cafés
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="radius-card flex flex-col items-center justify-center bg-baseCard px-5 pb-5">
          <img
            className="mb-1 h-28 w-28 -translate-y-5 object-cover"
            src={expressoTradImg}
            alt="Imagem de uma xícara de expresso tradicional"
          />
          <div className="mb-4 rounded-full bg-yellowLight px-2 py-1 text-tag font-bold uppercase text-yellowDark">
            Tradicional
          </div>
          <div className="pb-2 font-display text-xl font-bold leading-13">
            Expresso Tradicional
          </div>
          <div className="text-center text-sm leading-13 text-baseLabel">
            O tradicional café feito com água quente e grãos moídos
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              R$ <div className="font-display text-2xl">9,90</div>
            </div>
            <div className="flex flex-1">
              <input className="" type="number" min={0} />
              <button className="rounded-md bg-purpleDark p-2">
                <ShoppingCart weight="fill" className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
