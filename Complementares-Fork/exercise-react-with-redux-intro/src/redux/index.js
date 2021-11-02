import { combineReducers, compose, createStore } from 'redux';
import reducerSignalChange from './reducerSignalChange';
import reducerMoveCar from './reducerMoveCar';

const rootReducer = combineReducers({ reducerSignalChange, reducerMoveCar });

const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(rootReducer, compose(extension));

export default store;
