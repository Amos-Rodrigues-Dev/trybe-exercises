import React, { Component } from 'react';
import Button from '../components/button';
import '../App.css'
import { connect } from 'react-redux';
import { setValidRemove } from '../redux/actions';

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

  onClear(isEmail) {
    const { setValidRemove, clientes } = this.props;
    setValidRemove(clientes.filter(({ email }) => email !== isEmail))
  }

  render() {
    
    const { login, clientes } = this.props;
    const { emailLogin, senha } = login;

    if (emailLogin === '' || senha === '') {
      return (
        <div className="Login" >
          <span>Login não efetuado</span>
          <Button type="button" label="Retornar" onClick={ this.onReturnLogin } />
        </div>
      ); 
    } 

    if (clientes.length === 0) {
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
            clientes.map(({ nome, email, idade }) => (
              <div key={ nome }>
                <div className="container-clientes" >
                  <div className="dados">
                    <p>Nome: { nome }</p>
                    <p>Email: { email }</p>
                    <p>Idade: { idade }</p>
                  </div>
                  <Button type="button" label="X" onClick={ () => this.onClear(email) } />  
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

const mapStateToProps = ({ reducer: { login, clientes}}) => ({
  login,
  clientes,
});

const mapDispatchProps = (dispatch) => ({
  setValidRemove: (state) => dispatch(setValidRemove(state)),
});

export default connect(mapStateToProps, mapDispatchProps)(Clientes);
