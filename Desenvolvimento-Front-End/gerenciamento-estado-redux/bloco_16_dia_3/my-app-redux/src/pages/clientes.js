import React, { Component } from 'react';
import Button from '../components/button';
import '../App.css'
import { connect } from 'react-redux';

class Clientes extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      idade: '',
    }

    this.onReturnLogin = this.onReturnLogin.bind(this);
    this.onCadastro = this.onCadastro.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onCadastro() {
    const { history} = this.props;
    history.push('/cadastro');
    this.setState({})
  }

  onReturnLogin() {
    const { history } = this.props;
    history.push('/login');
  }

  onClear({ target }) {
    console.log(target.parentNode.children);
    // target.parentNode.remove(target.parentNode.childreen)
  }

  render() {
    
    const { getStateLogin, getStateCliente } = this.props;
    const { email: emailLogin, senha } = getStateLogin;

    if (emailLogin === '' || senha === '') {
      return (
        <div className="Login" >
          <span>Login não efetuado</span>
          <Button type="button" label="Retornar" onClick={ this.onReturnLogin } />
        </div>
      ); 
    } 

    if (getStateCliente.length === 0) {
      return (
        <div className="Login">
          <p>Nenhum cliente cadastrado</p>
        <Button type="button" label="Cadastro de Clientes" onClick={ this.onCadastro } />
        <Button type="button" label="Retornar" onClick={ this.onReturnLogin } />
        </div>
      );
    }

    return (
      <div className="Login">
        <fieldset>
          <legend>Clientes</legend>
          {
            getStateCliente.map(({ nome, email, idade }) => (
            <div key={ nome }>
              <div className="container-clientes" >
                <div className="dados">
                  <p>Nome: { nome }</p>
                  <p>Email: { email }</p>
                  <p>Idade: { idade }</p>
                </div>
                <Button type="button" label="X" onClick={ this.onClear } />  
              </div>
            </div>
          ))
          }
        </fieldset>
       <Button type="button" label="Cadastro de Clientes" onClick={ this.onCadastro } />
       <Button type="button" label="Retornar" onClick={ this.onReturnLogin } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getStateLogin: state.reducer.login,
  getStateCliente: state.reducer.clientes,
});

export default connect(mapStateToProps)(Clientes);
