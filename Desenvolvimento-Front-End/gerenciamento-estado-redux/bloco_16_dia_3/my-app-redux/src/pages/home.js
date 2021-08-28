import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>Cadastro de Clientes</h2>
        <Link className="App-link" to="/Login" >LOGIN</Link>
      </div>
    );
  }
}

export default Home;
