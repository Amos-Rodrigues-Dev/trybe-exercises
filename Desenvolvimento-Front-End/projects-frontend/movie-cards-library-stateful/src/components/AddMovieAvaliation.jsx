import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieAvaliation extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieAvaliation.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieAvaliation;
