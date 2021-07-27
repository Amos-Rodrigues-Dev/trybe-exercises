import React, { Component } from 'react';
import DadosPessoais from './DadosPessoais';
import UltimoEmprego from './UltimoEmprego';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
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
}

class FormCurriculo extends Component {
  constructor(propos) {
    super(propos);
    this.state = INITIAL_STATE;

    this.changeHandler = this.changeHandler.bind(this);
    this.validateField = this.validateField.bind(this);
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
  
  validateAddress = address => address.replace(/[^\w\s]/gi, '');

  resetForm = () => { this.setState(INITIAL_STATE) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { submitted } = this.state;

    return (
      <main className="Form-container">
        <h1>Currículo</h1>
        <form className="Form">
          <DadosPessoais 
            changeHandler={this.changeHandler}
            onBlurHandler= { this.onBlurHandler }
            currentState= { this.state } 
          />
          <UltimoEmprego changeHandler={this.changeHandler} />
          <input
              type="button"
              onClick={ this.sendForm }
              value="Enviar"
          />
          <input
            type="reset"
            onClick={ this.resetForm }
            value="Limpar"
          />
        </form>
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
  
        { submitted && <FormDataDisplay currentState={ this.state } /> }

      </main>
    );
  }
}

export default FormCurriculo;