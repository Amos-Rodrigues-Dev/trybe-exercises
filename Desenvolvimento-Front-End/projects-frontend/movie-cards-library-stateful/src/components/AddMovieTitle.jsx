import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          id="title-input"
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieTitle;
