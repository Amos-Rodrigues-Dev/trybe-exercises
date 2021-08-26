import React, { Component } from 'react';
import Button from '../components/button';
import Input from '../components/input';
import '../App.css'
import { connect } from 'react-redux';
import { setValidCliente } from '../redux/actions';

class Clientes extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      idade: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { history, setDispatchCliente } = this.props;
    setDispatchCliente(this.state);
    history.push('/cadastro');
  }

  render() {
    const { nome, email, idade } = this.state;
    return (
      <form>
        <fieldset className="Login">
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="idade: "
          type="text"
          onChange={ this.handleChange }
          value={ idade }
          name="idade"
          required
        />
          <Button type="button" label="Cadastro" onClick={ this.onSubmitForm } />
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDispatchCliente: (payload) => dispatch(setValidCliente(payload)),
});

export default connect(null, mapDispatchToProps)(Clientes);
