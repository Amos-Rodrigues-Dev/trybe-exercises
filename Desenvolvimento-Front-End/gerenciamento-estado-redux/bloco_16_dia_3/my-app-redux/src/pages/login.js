import React, { Component } from 'react';
import Button from '../components/button';
import Input from '../components/input';
import '../App.css';
import { connect } from 'react-redux';
import { setValidEmail } from '../redux/actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { history, dispatchSetLogin } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetLogin
    dispatchSetLogin(this.state);
    history.push('/clientes');
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <form>
          <fieldset className="Login">
            <Input
              id='email'
              label="email: "
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
            <Input
              suggested="current-password"
              id="senha"
              label="senha: "
              type="password"
              name="senha"
              value={ senha }
              onChange={ this.handleChange }
              required
            />
            <Button type="button" label="Login" onClick={ this.onSubmitForm } />
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetLogin: (payload) => dispatch(setValidEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
