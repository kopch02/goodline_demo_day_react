import { useState } from 'react'

import s from './Header.module.scss'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <a href="/">
          <img
            src="img/logo.jpg"
            alt="logo"
          />
        </a>
        <span>DiveSea</span>
      </div>
      <nav className={s.nav}>
        <button
          className={s.nav_mobile_btn}
          id="nav_btn"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            src="img/menu.svg"
            alt="menu"
          />
        </button>
        <ul
          className={`${s.nav__list} ${openMenu ? s.nav__list_active : ''}`}
          id="nav__list"
        >
          <li className={s.nav__list_item}>
            <a
              href="/discover"
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
              href="/sell"
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
