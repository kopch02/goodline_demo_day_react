import { ExploreTrending } from './components/ExploreTrending/ExploreTrending'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'
import { UnleashRightContent } from './components/UnleashRightContent/UnleashRightContent'
import UnleashLeftContent from './components/UnleashLeftContent/UnleashLeftContent'
import { ExploreAllArrow } from './components/ExploreAllArrow/ExploreAllArrow'

const App = () => {
  return (
    <>
      <section className="container">
        <ExploreTrending />
        <ExploreAllArrow/>
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
      <section>
        <Footer />
      </section>
    </>
  )
}

export default App
