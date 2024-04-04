import { ExploreTrending } from './components/ExploreTrending/ExploreTrending'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <section>
        <ExploreTrending />
      </section>
      <section>
        <Banner/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default App
