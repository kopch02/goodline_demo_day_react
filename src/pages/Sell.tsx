import s from './Sell.module.scss'
import { SellLeft } from '../components/SellLeft/SellLeft'

export const Sell = () => {
  return (
    <>
    <section className="container">
      <h2 className={s.sell_header}>Create Your NFT</h2>
      <SellLeft/>
    </section>
    </>
  )
}

