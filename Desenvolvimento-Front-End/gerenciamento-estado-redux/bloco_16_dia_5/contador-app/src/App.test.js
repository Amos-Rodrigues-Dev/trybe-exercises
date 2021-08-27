import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });


  it('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  it('teste com o valor padrão do reducer e teste se um clique funciona', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    expect(screen.queryByText('10')).toBeInTheDocument();
    
    const buttonAdicionar = screen.getByRole('button');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(buttonAdicionar).toHaveTextContent('Clique aqui')

    fireEvent.click(buttonAdicionar);
    expect(screen.queryByText('11')).toBeInTheDocument();

  })
});
