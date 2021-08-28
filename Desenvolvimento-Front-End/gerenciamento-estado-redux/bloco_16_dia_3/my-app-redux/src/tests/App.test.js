import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { screen } from '@testing-library/react';

describe('Catastro de Clientes', () => {

  it('verifica se a tela inicial é renderizada corretamente', () => {
    renderWithRouterAndRedux(<App />);

    expect(
      screen.getByText(/cadastro de clientes/i),
    ).toBeInTheDocument();


  });
});
