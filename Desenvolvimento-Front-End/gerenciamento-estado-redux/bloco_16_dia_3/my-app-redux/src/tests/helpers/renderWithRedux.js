import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";


const renderWithRedux = (
  component,
  { initialState = {}, store = createStore(rootReducer, initialState)} = {}
  ) => ({
    ...render(<Provider store={ store }>{ component }</Provider>), store,
  });

export default renderWithRedux;

// Utilizando o Thunk 
/* const createMockStore = (initialState) => (
  createStore(combineReducers({ reducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

export default renderWithRedux; */