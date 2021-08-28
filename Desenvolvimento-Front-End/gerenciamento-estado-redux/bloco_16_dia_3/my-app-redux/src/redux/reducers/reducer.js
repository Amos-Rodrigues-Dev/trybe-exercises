import { VALID_EMAIL, VALID_CLIENTE, VALID_REMOVE } from '../actions';

const INITIAL_STATE = {
  login: {
    email: '',
    senha: '',
  },
  clientes: [],
} 

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case VALID_EMAIL:
      return { ...state, login: payload };
    case VALID_CLIENTE:
      return {...state, clientes: [...state.clientes, payload]};
    case VALID_REMOVE:
      return { ...state, clientes: payload }
    default:
      return state;
  }
}

export default reducer;
