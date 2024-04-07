import s from './Sell.module.scss'
import { SellLeft } from '../components/SellLeft/SellLeft'
import { SellRight } from '../components/SellRight/SellRight'

export const Sell = () => {
  return (
    <>
    <section className="container">
    <form action="https://jsonplaceholder.typicode.com/posts" target='_blank' method="post" className={s.form} >
      <h2 className={s.sell_header}>Create Your NFT</h2>
      <div className={s.sell_container}>
        <SellLeft/>
        <SellRight/>
      </div>
      </form>
    </section>
    </>
  )
}

