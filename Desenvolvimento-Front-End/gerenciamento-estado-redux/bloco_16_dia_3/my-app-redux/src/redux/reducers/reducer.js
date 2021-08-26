import { VALID_EMAIL, VALID_CLIENTE } from '../actions';

const INITIAL_STATE = {
  login: {
    email: '',
    senha: '',
  },
  cliente: {
    nome: '',
    email: '',
    idade: '',
  }
} 

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VALID_EMAIL:
      return { ...state, login: action.payload };
    case VALID_CLIENTE:
      return { ...state, cliente: action.payload }
    default:
      return state;
  }
}

export default reducer;
