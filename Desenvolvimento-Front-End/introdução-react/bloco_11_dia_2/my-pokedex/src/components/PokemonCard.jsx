import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonCard extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    const { value, measurementUnit} = averageWeight;
    return (
      <section className='pokemon-card'>
        <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Average weight: ${value} ${measurementUnit}`}</p>
        </div>
        <img src={image} alt="Pokemon" />
      </section>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
}

PokemonCard.defaultProps = {
  name: 'Pokemon'
}

export default PokemonCard;
