import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { GlobalCss } from "./styles";

import MyRoutes from "./routes"
import Footer from "./components/Footer";
import { store } from "./store"

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalCss />
      <MyRoutes />
      <Footer />
    </BrowserRouter>
  </Provider>
)

export default App
