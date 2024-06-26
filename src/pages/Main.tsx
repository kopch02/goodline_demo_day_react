import { ExploreTrending } from '../components/ExploreTrending/ExploreTrending'
import { Banner } from '../components/Banner/Banner'
import { UnleashRightContent } from '../components/UnleashRightContent/UnleashRightContent'
import { UnleashLeftContent } from '../components/UnleashLeftContent/UnleashLeftContent'
import { ExploreAllArrow } from '../components/ExploreAllArrow/ExploreAllArrow'
import { TopColection } from '../components/TopColection/TopColection'
import { Weekly } from '../components/Weekly/Weekly'
import { Hero } from '../components/Hero/Hero'

import './main.css'

export const Main = () => {
  return (
    <>
      <section className="container">
        <Hero />
      </section>
      <section>
        <Weekly />
      </section>
      <section className="container">
        <TopColection />
      </section>
      <section className="container">
        <ExploreTrending />
        <ExploreAllArrow />
      </section>
      <section className="container">
        <div className="unleash_line"></div>
        <div className="unleash_content">
          <UnleashLeftContent />
          <UnleashRightContent />
        </div>
      </section>
      <section className="container">
        <Banner />
      </section>
    </>
  )
}
