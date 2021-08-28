import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";


const renderWithRedux = ( 
  component,
  { initialState = {}, store = createStore(rootReducer, initialState)} = {}
  ) => ({
    ...render(<Provider store={ store }>{ component }</Provider>)
  });

export default renderWithRedux;
