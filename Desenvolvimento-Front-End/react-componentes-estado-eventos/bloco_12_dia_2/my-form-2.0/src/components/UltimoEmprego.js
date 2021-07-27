import React, { Component } from 'react';

class UltimoEmprego extends Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <fieldset>
      <legend>Emprego Anterior</legend>

        <div className="container">
          <label>Resumo do Currículo:
            <textarea
              name='resume' 
              maxLength='1000' 
              required
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="container">
          <label>Cargo:
            <input
              type='text'
              name='role'
              maxLength='40' 
              required
              onChange={changeHandler}
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
              }}
            />
          </label>

        </div>

        <div className="container">
          <label>Descrição do cargo:
            <textarea 
              name='roleDescription'
              maxLength='500'
              onChange={changeHandler}
            />
          </label>
        </div>

      </fieldset>
    );
  }
}

export default UltimoEmprego;