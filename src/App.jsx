import logo from './logo.svg';
import './App.css';
import Cabecera from './components/Cabecera';
import ContadorClase from './components/ContadorClase';
import ContadorFuncional from './components/ContadorFuncional';
import FichaPersona from './components/FichaPersona';

function App() {
  return (
    <div>
      <Cabecera titulos={["Curso de React", "Clase Tres", "Manejo del state"]}/> {/* Le estoy pasando un vector de titulos */}
      <main className="container">
        <FichaPersona nombre="Matias" apellido="Biloni" edad={28} imagen="https://thispersondoesnotexist.com/"/>
        <ContadorFuncional/>
        <ContadorClase/>
      </main>
    </div>
  );
}

export default App;
