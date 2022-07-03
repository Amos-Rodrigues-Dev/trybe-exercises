// implement Header component here
//
import React, { Component } from 'react';

class Header extends Component {
  render() {
    const text = 'Movie Cards Library';
    return (
      <header className="movie-card-header">
        <h1 className="page-title">{text}</h1>
      </header>
    );
  }
}

export default Header;
