import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

class PokedexGenerator extends Component {
  render() {
    const { dataPokemons } = this.props;
    return (
      <div>
        { dataPokemons.map(({ name, type, averageWeight, image, id }) => (
          <PokemonCard 
            key={ id }
            name={ name }
            type={ type }
            averageWeight={ averageWeight }
            image={ image }
          />
        )) }
      </div>
    );
  }
}

export default PokedexGenerator;