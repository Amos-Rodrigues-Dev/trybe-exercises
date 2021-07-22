import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';

class PokedexGenerator extends Component {
  render() {
    const { dataPokemons } = this.props;
    return (
      <div className='App-header'>
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

PokedexGenerator.propTypes = {
  dataPokemons: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.objectOf(
          PropTypes.shape(
            {
              value: PropTypes.number.isRequired,
              measurementUnit: PropTypes.string.isRequired,
            }
          ),
        ).isRequired,
      }
    ),
  ).isRequired,
}

export default PokedexGenerator;