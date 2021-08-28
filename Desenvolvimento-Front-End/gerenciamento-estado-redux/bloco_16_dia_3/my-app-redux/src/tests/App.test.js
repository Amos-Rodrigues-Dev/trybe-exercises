import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Catastro de Clientes', () => {

  it('verifica se a tela inicial é renderizada corretamente', () => {
    renderWithRouterAndRedux(<App />);

    expect(
      screen.getByText(/cadastro de clientes/i),
    ).toBeInTheDocument();
  });

  it('verifica se os dados do login foram salvos corretamente no estado global', () => {
    const { store } = renderWithRouterAndRedux(<App />, { initialEntries: ['/login']})

    const emailInput = screen.getByTestId('input-email');
    const password = screen.getByTestId('input-password');
    const loginButton = screen.getByTestId('btn-login');

    userEvent.type(emailInput, 'amos.adm.rh@gmail.com');
    userEvent.type(password, '123456');
    userEvent.click(loginButton);

    expect(store.getState().reducer.login.email).toBe('amos.adm.rh@gmail.com')
    expect(store.getState().reducer.login.senha).toBe('123456')
  });

  it('verifica se o cadastro funciona corretamente', () => {
    const { store } = renderWithRouterAndRedux(<App />, { 
      initialEntries: ['/cadastro'], 
      initialState: { 
        clientes: [], 
        login: { email: 'amos@amos', senha: '123456'}
      },
    });

    const nameInput = screen.getByTestId('input-register-nome');
    const emailInput = screen.getByTestId('input-register-email');
    const ageInput = screen.getByTestId('input-register-idade');
    const registerButton = screen.getByText('Cadastrar');

    userEvent.type(nameInput, 'Amós Rodrigues');
    userEvent.type(emailInput, 'amos.adm.rh@gmail.com');
    
    const IDADE = '39';
    userEvent.type(ageInput, IDADE)

    userEvent.click(registerButton);

    const { nome, email, idade } = store.getState().reducer.clientes[0];

    expect(nome).toBe('Amós Rodrigues');
    expect(email).toBe('amos.adm.rh@gmail.com');
    expect(idade).toBe('39');
  });
});
