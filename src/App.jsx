import { BrowserRouter } from "react-router-dom";

import { GlobalCss } from "./styles";
import Header from "./components/Header";
import MyRoutes from "./routes"
import Footer from "./components/Footer";

const App = () => (
    <BrowserRouter>
      <GlobalCss />
      <MyRoutes />
      <Footer />
    </BrowserRouter>
  )

export default App
