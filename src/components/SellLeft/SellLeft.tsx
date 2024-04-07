import s from './SellLeft.module.scss'

export const SellLeft = () => {
  return (
    <fieldset>
      <div className={`${s.name} ${s.input_container}`}>
        <span className={s.input_header}>Name</span>
        <input
          type="text"
          className={`${s.name_input} ${s.input}`}
          placeholder="ArtWork Name"
          name="name"
        />
      </div>
      <div className={`${s.description} ${s.input_container}`}>
        <span className={s.input_header}>Description</span>
        <textarea
          className={`${s.description_input} ${s.input}`}
          placeholder="Enter Your Description"
          name="description"
        />
      </div>
      <div className={s.royalty_size}>
        <div className={`${s.royalty} ${s.input_container}`}>
          <span className={s.input_header}>Royalty</span>
          <select
            className={`${s.royalty_input} ${s.select}`}
            name="royalty"
          >
            <option
              value=""
              disabled
              selected
              hidden
              className={s.placeholder}
            >
              Royalty
            </option>
            <option>10%</option>
            <option>50%</option>
            <option>100%</option>
          </select>
        </div>
        <div className={`${s.size} ${s.input_container}`}>
          <span className={s.input_header}>Size</span>
          <input
            type="text"
            className={`${s.size_input} ${s.input}`}
            placeholder="Ex - 100 x 100"
            name="size"
          />
        </div>
      </div>
      <div className={`${s.tags} ${s.input_container}`}>
        <span className={s.input_header}>Tags</span>
        <input
          type="text"
          className={`${s.tags_input} ${s.input}`}
          placeholder="Beautiful Castle, Monkeys ETC"
          name="tags"
        />
      </div>
      <div className={s.price_stock}>
        <div className={`${s.price} ${s.input_container}`}>
          <span className={s.input_header}>Price</span>
          <div className={s.price_container}>
            <select
              className={`${s.price_select} ${s.select}`}
              name="price_type"
            >
              <option
                value=""
                selected
                className={s.placeholder}
              >
                ETH
              </option>
              <option>BTC</option>
              <option>ETC</option>
            </select>
            <input
              type="text"
              className={`${s.price_input} ${s.input}`}
              placeholder="0.00000007 ETC"
              name="price"
            />
          </div>
        </div>
        <div className={`${s.stock} ${s.input_container}`}>
          <span className={s.input_header}>In Stock</span>
          <select
            className={`${s.stock_input} ${s.select}`}
            name="stock"
          >
            <option
              value=""
              selected
              className={s.placeholder}
            >
              001
            </option>
            <option>002</option>
          </select>
        </div>
      </div>
      <div className={s.put}>
        <div className={s.put_text}>
          <span className={s.input_header}>Put On Sale</span>
          <span className={s.span_side}>
            People Will Bids On Your NFT Project
          </span>
        </div>
        <div className={s.put_check}>
          <input
            type="checkbox"
            id="put_check"
            name="put_check"
            className={s.checkbox}
          />
          <label
            htmlFor="put_check"
            className={s.checkbox_label}
          ></label>
        </div>
      </div>
      <div className={s.direct}>
        <div className={s.direct_text}>
          <span className={s.input_header}>Direct Sale</span>
          <span className={s.span_side}>No Bids - Only Direct Salling</span>
        </div>
        <div className={s.direct_check}>
          <input
            type="checkbox"
            id="direct_check"
            name="direct_check"
            className={s.checkbox}
          />
          <label
            htmlFor="direct_check"
            className={s.checkbox_label}
          ></label>
        </div>
      </div>
      <button
        className={s.form_btn}
        type="submit"
      >
        Create
      </button>
    </fieldset>
  )
}
