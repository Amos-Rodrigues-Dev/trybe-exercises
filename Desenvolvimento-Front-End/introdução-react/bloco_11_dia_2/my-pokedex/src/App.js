import './App.css';
import data from './Data';
import PokedexGenerator from './components/PokedexGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokedexGenerator dataPokemons={ data } />
      </header>
    </div>
  );
}

export default App;
