import React, { Component } from 'react';
const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];


class DadosPessoais extends Component {
  render() {
    const { changeHandler, currentState, onBlurHandler } = this.props;
    
    return (
      
      <fieldset className="Form">
        
        <legend>Dados Pessoais</legend>

        <div className="container">
          <label htmlFor='name'>Nome:
            <input 
              id='name'
              type='text' 
              name='name' 
              value={currentState.name}
              size='40' 
              maxLength='40' 
              require
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor='email'>Email:
            <input 
              id='email'
              type='email' 
              name='email'
              size='50' 
              maxLength='50' 
              required
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor='cpf'>CPF:
            <input 
              id='cpf' 
              type='text' 
              name='cpf'
              maxLength='11' 
              required
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor='address'>Endereço:
            <input 
              id='address' 
              type='text' 
              size='50' 
              name='address'
              maxLength='200'
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor='cidade'>Cidade:
            <input
              id='cidade'
              type='text'
              name='city'
              maxLength='28'
              required
              value={currentState.city}
              onBlur={onBlurHandler}
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor='State'>Estado:
            <select
              id='State'
              name="countryState"
              required
              onChange={changeHandler}
              defaultValue=""
            >
              <option value="">Selecione</option>
              {
                states.map((value, key) => (
                  <option key={ key }>{ value }</option>
                ))
              }
            </select>
          </label>
        </div>
        
        <div className="container">
          <label htmlFor="house">
            <input
              type="radio"
              id="house"
              name="addressType"
              value="house"
              onChange={changeHandler}
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input
              type="radio"
              id="apart"
              name="addressType"
              value="apartment"
              onChange={changeHandler}
            />
            Apartamento
          </label>
        </div>
        
      </fieldset>

    );
  }
}

export default DadosPessoais;