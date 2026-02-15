import Header from "./components/layout/Header";
import Hero from  "./components/layout/Hero";
import Clientes from "./components/layout/Clientes";

function App() {
  
  return(<>
  
    <div className="contenedor">  {/* Contenedor para poder centrar todos los elementos de forma horizontal en nuestra pagina */}
      <Header/>
      <Hero/>
      <Clientes/>
    </div>
  </>) 
  
}

export default App
