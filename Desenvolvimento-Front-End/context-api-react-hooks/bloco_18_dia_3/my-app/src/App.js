import logo from './logo.svg';
import './App.css';
import useTimer from './useTimer';

function App() {
  const { timer, randomNumber, isMultiple } = useTimer();

  return (
    <div className="App">
      <header className="App-header">
        { timer }
        <br />
        { randomNumber }
        <br />
        { isMultiple ? 'Acerto' : ''}
        <br />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
