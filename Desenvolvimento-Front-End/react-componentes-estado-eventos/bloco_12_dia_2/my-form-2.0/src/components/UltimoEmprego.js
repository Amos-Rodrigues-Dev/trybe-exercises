import React, { Component } from 'react';

class UltimoEmprego extends Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <fieldset className="Form">
      <legend>Último Emprego</legend>

        <div className="container">
          <label>Resumo do Currículo:
            <textarea
              name='resume' 
              maxLength='1000' 
              required
              
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

            />
          </label>

        </div>


        <div className="container">
          <label>Descrição do cargo:
            <textarea 
              name='roleDescription'
              maxLength='500'

            />
          </label>
        </div>

      </fieldset>
    );
  }
}

export default UltimoEmprego;