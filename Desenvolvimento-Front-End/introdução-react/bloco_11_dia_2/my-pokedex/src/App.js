import './App.css';
import data from './Data';
import PokedexGenerator from './components/PokedexGenerator';

function App() {
  return (
    <div>
      <header className="App">
      <h1>Pokedex</h1>
        <PokedexGenerator dataPokemons={ data } />
      </header>
    </div>
  );
}

export default App;
