import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          id="image-input"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieImage;
