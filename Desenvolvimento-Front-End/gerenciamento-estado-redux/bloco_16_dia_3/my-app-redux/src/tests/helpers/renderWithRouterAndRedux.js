import React from 'react';
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";

const renderWithRouterAndRedux = (
  component,
  {
  initialState = {}, 
  store = createStore(rootReducer, initialState), 
  initialEntries = ['/'],
  history = createMemoryHistory({ initialEntries })
  } = {},
  
) => ({
    ...render(
      <Router history={ history }>
        <Provider store={ store }>
          { component }
        </Provider>
      </Router>
    ), history, store,
});

export default renderWithRouterAndRedux;
