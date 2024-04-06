import s from './SellLeft.module.scss'

export const SellLeft = () => {
  return (
    <form action="https://jsonplaceholder.typicode.com/posts" method="post" className={s.form}>
      <fieldset>
        <div className={s.name}>
          <span className={s.name_span}>Name</span>
          <input type="text" className={s.name_input} />
        </div>
        <div className={s.description}>
          <span className={s.description_span}>Description</span>
          <input type="text" className={s.description_input} />
        </div>
        <div className={s.royalty_size}>
          <div className={s.royalty}>
            <span className={s.royalty_span}>Royalty</span>
            <input type="text" className={s.royalty_input} />
          </div>
          <div className={s.size}>
            <span className={s.size_span}>Size</span>
            <input type="text" className={s.size_input} />
          </div>
        </div>
        <div className={s.tags}>
          <span className={s.tags_span}>Tags</span>
          <input type="text" className={s.tags_input} />
        </div>
        <div className={s.price_stock}>
          <div className={s.price}>
            <span className={s.price_span}>Price</span>
            <input type="text" className={s.price_input} />
          </div>
          <div className={s.stock}>
            <span className={s.stock_span}>In Stock</span>
            <input type="text" className={s.stock_input} />
          </div>
        </div>
        <div className={s.put}>
          <div className={s.put_text}>
            asd
          </div>
          <div className={s.put_check}>
            v
          </div>
        </div>
        <div className={s.direct}>
          <div className={s.direct_text}>
            asd
          </div>
          <div className={s.direct_check}>
            v
          </div>
        </div>
        <button className={s.form_btn}>

        </button>
      </fieldset>
    </form>
  )
}

