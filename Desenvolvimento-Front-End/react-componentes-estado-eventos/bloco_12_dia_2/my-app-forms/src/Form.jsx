import React, { Component } from 'react'
import './Form.css';
import EstadoFavorito from './EstadoFavorito';
import DadosPessoais from './DadosPessoais';
import PalavraChave from './PalavraChave';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: '',
      palavraChaveFavorita: ''
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito 
          value={this.state.estadoFavorito} 
          handleChange={this.handleChange} 
          />
          <DadosPessoais 
            valueName={this.state.nome}
            valueEmail={this.state.email}
            valueIdade={this.state.idade}
            valueVaiComparecer={this.state.vaiComparecer}
            handleChange={this.handleChange}
          />
          <PalavraChave 
          value={this.state.palavraChaveFavorita} 
          handleChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;