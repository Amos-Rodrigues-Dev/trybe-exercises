//importe o método applyMiddleware 
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//importe o redux-thunk
import rootReducer from '../reducers';

//aplique o middleware
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;
