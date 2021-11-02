import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    // Caso precise de uma nova query adicione no object destructuring
    const { getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    listTodo.forEach((task) => {
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(btnAdd);
    });

    listTodo.forEach((task) => {
      expect(getByText(task)).toBeInTheDocument();
    });
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content="Limpar a casa" />);
    expect(getByText('Limpar a casa')).toBeInTheDocument();
  })
})
