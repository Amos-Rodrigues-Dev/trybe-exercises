import React, { Component } from 'react';
import DadosPessoais from './DadosPessoais';
import UltimoEmprego from './UltimoEmprego';

class FormCurriculo extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      formError: {},
      submitted: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    let { name, value } = target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }
  
  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  render() {
    return (
      <section className="Form-container">
        <h1>Currículo</h1>
        <form className="Form">
        <DadosPessoais 
          changeHandler={this.changeHandler}
          onBlurHandler= { this.onBlurHandler }
          currentState= { this.state } 
        />
        <UltimoEmprego changeHandler={this.changeHandler} />
        </form>
      </section>
    );
  }
}

export default FormCurriculo;