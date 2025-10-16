import Header from "./components/Header"
import RestaurantsList from "./components/RestaurantsList"
import Footer from "./components/Footer"
import { GlobalCss } from "./styles"

const App = () => (
    <>
      <GlobalCss />
      <Header />
      <RestaurantsList />
      <Footer />
    </>
  )

export default App
