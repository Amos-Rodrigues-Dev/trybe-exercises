import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/button';
import Input from '../components/input';
import { setValidCliente } from '../redux/actions';

class Cadastro extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      idade: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onReturnClientes = this.onReturnClientes.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { setDispatchCliente } = this.props;
    const { nome } = this.state;

    if (nome === '') {
      alert(`Campo "nome" obrigatório!`)
    } else {
      setDispatchCliente(this.state);
      this.setState({ nome: '', email: '', idade: '' });
    }
  }

  onReturnClientes() {
    const { history } = this.props;
    history.push('/clientes');
  }

  render() {
    const { nome, email, idade } = this.state;
    return (
      <form>
      <fieldset className="Login">
        <legend>Cadastrar Clientes</legend>
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
        <Button type="button" label="Cadastrar" onClick={ this.onSubmitForm } />
        <Button type="button" label="Clientes" onClick={ this.onReturnClientes } />
      </fieldset>
    </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDispatchCliente: (payload) => dispatch(setValidCliente(payload)),
});

export default connect(null, mapDispatchToProps)(Cadastro);