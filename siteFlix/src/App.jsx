import { Outlet } from "react-router-dom";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import ScrollToTop from "./componentes/ScrollToTop/ScrollToTop";
function App() {
  return (
    <div className="bg-preto">
      <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer />
    </div>  
  );
}

export default App;
