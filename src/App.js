import './App.css';
import Cor from './components/Cor';
import Carro from './components/Carro';
import Avaliacao from './components/Avaliacao';
import Relogio from './components/Relogio';

function App() {
  return (
    <div className="App">
      <h1 className="h1">
        Trabalhando com ReactJs
      </h1>
      <p className="p">
        Aula 56 TransformaTec, Trabalhando com States.
      </p>
      <Cor cor="Green" />
      <Carro />
      <Avaliacao 
      tema="Introdução a algoritmos" 
      questoes={30}
      tempoTotal={180}
      peso={50}/>
      <Relogio />
    </div>
  );
}

export default App;
