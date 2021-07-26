import React, { Component } from 'react';

class DadosPessoais extends Component {
  render() {
    const { valueName, valueEmail, valueIdade, valueVaiComparecer, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <input 
          type="text" 
          name="nome"
          value={valueName}
          onChange={handleChange}
          placeholder='Nome'
        />
        <input 
          type="email" 
          name="email"
          value={valueEmail}
          onChange={handleChange}
          placeholder='E-mail'
        />
        <input
          type="number"
          name="idade"
          value={valueIdade}
          onChange={handleChange}
          placeholder="idade"
        />
        <input
          type="checkbox"
          name="vaiComparecer"
          value={valueVaiComparecer}
          onChange={handleChange}
        />
        <input 
          type="file" 
          name="eviar-foto" 
          id="foto" 
        />
      </fieldset>
    );
  }
}

export default DadosPessoais;