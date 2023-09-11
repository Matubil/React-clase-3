import logo from './logo.svg';
import './App.css';
import Cabecera from './components/Cabecera';
import ContadorDeClase from './components/ContadorDeClase';
import ContadorFuncional from './components/ContadorFuncional';

function App() {
  return (
    <div>
      <Cabecera titulos={["Curso de React", "Clase Tres", "Manejo del state"]}/> {/* Le estoy pasando un vector de titulos */}
      <main className="container">
        <ContadorFuncional/>
        <ContadorDeClase/>
      </main>
    </div>
  );
}

export default App;
