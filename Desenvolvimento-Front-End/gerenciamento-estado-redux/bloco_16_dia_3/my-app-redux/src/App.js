import { Switch, Route } from 'react-router-dom';
import './App.css';
import Cadastro from './pages/cadastro';
import Clientes from './pages/clientes';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div className="App-header">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/clientes" component={ Clientes } />
        <Route path="/cadastro" component={ Cadastro } />
      </Switch>
    </div>
  );
}

export default App;
