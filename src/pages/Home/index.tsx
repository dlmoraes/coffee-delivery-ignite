import backgroundIntro from '../../assets/backgroudIntro.svg'
import introImg from '../../assets/intro.png'
import coffeesFake from '../../data/coffeesFake'
import { ItemCoffee } from './components/ItemCoffee'
import { ListIntros } from './components/ListIntros'

export function Home() {
  const coffeeItems = coffeesFake

  return (
    <>
      <div className="z-10 flex items-center justify-between pt-24">
        <div className="max-w-introText">
          <div className="absolute -z-10 flex flex-1 blur-intro">
            <img className="w-full opacity-15" src={backgroundIntro} alt="" />
          </div>
          <div>
            <div className="font-display text-5xl font-extrabold leading-13 text-baseTitle">
              Encontre o café perfeito para qualquer hora do dia
            </div>
            <div className="text-xl leading-13 text-baseSubtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </div>
            <ListIntros />
          </div>
        </div>
        <img src={introImg} alt="" />
      </div>

      <div className="pb-14 pt-32 font-display text-3.1xl font-extrabold leading-tight text-baseTitle">
        Nossos cafés
      </div>

      <div className="grid grid-cols-4 gap-x-9 gap-y-10">
        {coffeeItems.map((item) => {
          return <ItemCoffee key={item.title} {...item} />
        })}
      </div>
    </>
  )
}
