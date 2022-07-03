// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.updateState(name, value);
  }

  onBookmarkedChange({ target }) {
    const { name } = target;
    this.updateState(name, true);
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.updateState(name, value);
  }

  onClick(e) {
    const { movies } = this.props;
    this.updateState('movies', [...movies, e]);
  }

  filterMovies(movies) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const text = movies.filter((movie) => (
      movie.title.includes(searchText) || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)
    ));
    const marked = movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    const select = movies.filter((movie) => movie.genre === selectedGenre);
    if (searchText !== '') return text;
    if (selectedGenre !== '') return select;
    if (bookmarkedOnly) return marked;
    return movies;
  }

  updateState(name, value) {
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
