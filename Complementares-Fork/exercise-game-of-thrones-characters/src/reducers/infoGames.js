import { GET_INFO_GAMES_SUCCESS, GET_INFO_GAMES_ERROR, SEARCH_GET_INFO_GAMES } from '../actions';

const INITIAL_STATE = {
  character: null,
  loading: false,
};

function infoGames(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_GET_INFO_GAMES:
      return {
        ...state,
        loading: true
      }
    case GET_INFO_GAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        character: action.payload.character,
      }
    case GET_INFO_GAMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state;
  }
}

export default infoGames;
