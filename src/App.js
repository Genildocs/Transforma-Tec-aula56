import './App.css';
import Cor from './components/Cor';
import Carro from './components/Carro';

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
    </div>
  );
}

export default App;
