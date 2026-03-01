import Header from "./components/layout/Header";
import Hero from  "./components/layout/Hero";
import Clientes from "./components/layout/Clientes";
import Trabajos from "./components/layout/Trabajos";
import AcercaDe from "./components/layout/AcercaDe";
import Contacto from "./components/layout/Contacto";
import Footer from "./components/layout/Footer";

function App() {
  
  return(<>
  
    <div className="contenedor">  {/* Contenedor para poder centrar todos los elementos de forma horizontal en nuestra pagina */}
      <Header />
      <Hero />
      <Clientes />
      <Trabajos />
      <AcercaDe/>
      <Contacto/>
      <Footer/>
    </div>
  </>) 
  
}

export default App
