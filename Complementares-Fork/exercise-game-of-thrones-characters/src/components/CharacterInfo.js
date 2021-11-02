import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// importe o connect do 'react-redux';

class CharacterInfo extends React.Component {
  render() {
    //faça a desestruturação das props aqui
    const { character, loading, error } = this.props

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = (state) => ({
  character: state.infoGames.character,
  error: state.infoGames.error,
  loading: state.infoGames.loading,
});

// conecte este componente ao redux aqui
export default connect(mapStateToProps)(CharacterInfo);

//faça as propTypes
CharacterInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  character: PropTypes.PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    aliases: PropTypes.arrayOf(PropTypes.string),
    books: PropTypes.arrayOf(PropTypes.string)
  }),
  error: PropTypes.string,
};

CharacterInfo.defaultProps = {
  error: null,
  character: null,
}
