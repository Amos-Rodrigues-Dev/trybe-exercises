// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieSelect from './AddMovieSelect';
import AddMovieImage from './AddMovieImage';
import AddMovieSinopse from './AddMovieSinopse';
import AddMovieAvaliation from './AddMovieAvaliation';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle title={ title } onChange={ this.handleChange } />
        <AddMovieSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <AddMovieImage imagePath={ imagePath } onChange={ this.handleChange } />
        <AddMovieSinopse storyline={ storyline } onChange={ this.handleChange } />
        <AddMovieAvaliation rating={ rating } onChange={ this.handleChange } />
        <AddMovieSelect genre={ genre } onChange={ this.handleChange } />

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
