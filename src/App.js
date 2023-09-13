import './App.css';
import Seccion from './components/Seccion';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo texto={"piedra papel tijera"}></Titulo>
      </header>
<Seccion/>
    </div>
  );
}

export default App;
