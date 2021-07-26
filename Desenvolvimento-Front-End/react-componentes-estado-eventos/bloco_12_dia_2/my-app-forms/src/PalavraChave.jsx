import React, { Component } from 'react';

class PalavraChave extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
      Escolha sua palavra chave favorita:
      <select 
        name="palavraChaveFavorita" 
        value={value}
        onChange={handleChange}
      >
        <option value="Componente">Componente</option>
        <option value="Estado">Estado</option>
        <option value="Evento">Evento</option>
        <option value="Props">Props</option>
      </select>
    </label>
    );
  }
}

export default PalavraChave;
