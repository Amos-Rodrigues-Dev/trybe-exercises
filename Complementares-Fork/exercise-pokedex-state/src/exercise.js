import React from 'react';

class AppExercise extends React.Component {
 
  constructor(props) {
    super();

    this.state = {
      cliquesBtn1: 0,
      cliquesBtn2: 0,
      cliquesBtn3: 0
    }

    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
  }

  handleClickBtn1() {
    this.setState((estadoAnterior, _props) => ({
      cliquesBtn1: estadoAnterior.cliquesBtn1 + 1
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.cliquesBtn1)}`);
    })
  }

  handleClickBtn2() {
    this.setState(({ cliquesBtn2 }) => ({
      cliquesBtn2: cliquesBtn2 + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.cliquesBtn2)}`);
    })
  }

  handleClickBtn3() {
    this.setState(({ cliquesBtn3 }, _props) => ({
      cliquesBtn3: cliquesBtn3 + 1
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.cliquesBtn3)}`);
    })
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { cliquesBtn1, cliquesBtn2, cliquesBtn3 } = this.state;
    console.log(this);
    return (
      <div className="buttons-count">
        <button 
        onClick={() =>  this.handleClickBtn1() }
        style={{ backgroundColor: this.getButtonColor(cliquesBtn1) }}
        >
          Botão 1 | Count = {cliquesBtn1}
        </button>
        <button 
        onClick={this.handleClickBtn2}
        style={{ backgroundColor: this.getButtonColor(cliquesBtn2) }}
        >
          Botão 2 | Count = {cliquesBtn2}
        </button>
        <button 
        onClick={this.handleClickBtn3}
        style={{ backgroundColor: this.getButtonColor(cliquesBtn3) }}
        >
          Botão 3 | Count = {cliquesBtn3}
        </button>
      </div>
    );
  }
}

export default AppExercise;