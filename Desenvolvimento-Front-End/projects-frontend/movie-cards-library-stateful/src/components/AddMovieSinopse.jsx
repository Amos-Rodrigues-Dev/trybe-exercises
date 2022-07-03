import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSinopse extends Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieSinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSinopse;
