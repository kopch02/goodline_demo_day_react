import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          src="img/logo.jpg"
          alt="logo"
        />
        <span>DiveSea</span>
      </div>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li className={s.nav__list_item}>
            <a
              href="#"
              className={s.nav__list_link}
            >
              Discover
            </a>
          </li>
          <li className={s.nav__list_item}>
            <a
              href="#"
              className={s.nav__list_link}
            >
              creators
            </a>
          </li>
          <li className={s.nav__list_item}>
            <a
              href="#"
              className={s.nav__list_link}
            >
              Sell
            </a>
          </li>
          <li className={s.nav__list_item}>
            <a
              href="#"
              className={s.nav__list_link}
            >
              stats
            </a>
          </li>
        </ul>
      </nav>
      <div className={s.nav_input}>
        <img
          src="img/converted.svg"
          alt="find"
        />
        <input
          type="text"
          placeholder="Search Art Work / Creator"
        />
      </div>
      <button className={s.nav_btn}>Connect Wallet</button>
    </header>
  )
}
