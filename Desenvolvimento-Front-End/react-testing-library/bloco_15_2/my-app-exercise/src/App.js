// App.js
// Exemplo 1
// import React from 'react';
// import './App.css';

// Exerciosio 1
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       joke: '',
//     }
//   }

//   componentDidMount() {
//     const API_URL = 'https://icanhazdadjoke.com/';
//     fetch(API_URL, { headers: { Accept: 'application/json' } })
//       .then((response) => response.json())
//       .then((data) => this.setState({ joke: data.joke }));
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.joke}
//       </div>
//     );
//   }
// }

// export default App;

// Exercicio 2

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            value={this.state.nome}
            data-testid='input-nome'
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            value={this.state.email}
            data-testid='input-email'
          />
        </p>
      </div>
    );
  }
}

export default App;