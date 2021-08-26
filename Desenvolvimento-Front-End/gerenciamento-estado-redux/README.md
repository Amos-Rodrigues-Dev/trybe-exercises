# Checklist do react-redux

*Antes de começar*
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

*Instalação*
- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux;
- [ ] npm install.
- [ ] npm install --save redux-devtools-extension
```
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
```
*Dependências (opcional)*
- [ ] npm i -D prop-types
- [ ] npm i -D eslint
- [ ] npm i -D eslint-plugin-sonarjs

*Criar dentro do diretório src:*
- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

*Criar dentro do diretório actions:*
- [ ] arquivo index.js.

*Criar dentro do diretório reducers:*
- [ ] arquivo index.js.

*Criar dentro do diretório store:*
- [ ] arquivo index.js.

*No arquivo App.js:*
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

**Se a sua aplicação não terá outras páginas, não é necessário configurar as rotas. Caso contrário:**
- [ ] npm install react-router-dom

*Em src/index.js:*
- [ ] definir o BrowserRouter, <BrowserRouter>
  
*No arquivo App.js:*
- [ ] definir o Switch, <Switch>
- [ ] definir a Route, <Route>

**O BrowserRouter, o Switch e a Route são três componentes essenciais para trabalhar rotas em React.**
*Caso necessário:
- [ ] criar o diretório components
- [ ] criar o diretório pages

*No arquivo store/index.js:*
- [ ] importar o rootReducer e criar a store
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

```
  import { createStore, compose } from 'redux';
  import rootReducer from '../reducers';

  const extension = window.devToolsExtension() || ((f) => f);

  const store = createStore(rootReducer, compose(extension));

  export default store;
```

*Na pasta reducers:*
- [ ] criar os reducers necessários
  
```
  const INITIAL_STATE = {
    state: '',
    };

    function myReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'NEW_ACTION':
          return { state: action.state };
        default:
          return state;
      }
    }
  
  export default myReducer;
```
  
- [ ] configurar os exports do arquivo index.js
  
```
   import { combineReducers } from 'redux';
   import myReducer from './myReducer';

   const rootReducer = combineReducers({ myReducer });

   export default rootReducer;
```

*Na pasta actions:*
- [ ] criar os actionTypes, por exemplo:
  
`export const ADD_TO_CART = 'ADD_TO_CART';`
  
- [ ] criar os actions creators necessários:
  
`export const newAction = (state) => ({ type: 'NEW_ACTION', state });`

*Nos componentes:*
- [ ] criar a função mapStateToProps
  
```
  const mapStateToProps = state => ({
    myFirstState: state.myReducer.state
  });
```

  
- [ ] criar a função mapDispatchToProps

```
  const mapDispatchToProps = (dispatch) => ({
    myFirstDispatch: (state) => dispatch(newAction(state))
  });
```
  
- [ ] fazer o connect 
  
  `export default connect(mapStateToProps, mapDispatchToProps)(Component)`

**Usando o Redux no React - Actions Assíncronas**
- [ ] npm install redux-thunk

```
// arquivo onde a redux store é criada
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '/path/to/your/root/reducer';

const store = createStore(reducer, applyMiddleware(thunk));
```

**Exemplo:**
```
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

// action creator que retorna um objeto, que você tem feito até então
const requestMovies = () => ({
  type: REQUEST_MOVIES});

// outro action creator que retorna um objeto, que você tem feito até então
const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies});

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchMovies() {
  return (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    return fetch('alguma-api-qualquer.com')
      .then((response) => response.json())
      .then((movies) => dispatch(receiveMovies(movies)));
  };
}

// componente onde você usaria a action creator fetchMovies assíncrona como uma outra qualquer

class MyConectedAppToRedux extends Component {

  componentDidMount() {
    const { dispatch, fetchMovies } = this.props;
    dispatch(fetchMovies()); // enviando a action fetchMovies
  }

}
```

**Funcionamento do Thunk através da createThunkMiddleware**
```
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```
