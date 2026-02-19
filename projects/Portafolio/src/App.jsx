import Header from "./components/layout/Header";
import Hero from  "./components/layout/Hero";
import Clientes from "./components/layout/Clientes";
import Trabajos from "./components/layout/Trabajos";

function App() {
  
  return(<>
  
    <div className="contenedor">  {/* Contenedor para poder centrar todos los elementos de forma horizontal en nuestra pagina */}
      <Header />
      <Hero />
      <Clientes />
      <Trabajos />
    </div>
  </>) 
  
}

export default App
