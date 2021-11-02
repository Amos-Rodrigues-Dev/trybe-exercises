import charAPI from "../services/charAPI";

export const SEARCH_GET_INFO_GAMES = 'SEARCH_GET_INFO_GAMES';
export const GET_INFO_GAMES_SUCCESS = 'GET_INFO_GAMES_SUCCESS';
export const GET_INFO_GAMES_ERROR = 'GET_INFO_GAMES_ERROR';

export const searchGetInfoGames = (payload) => ({
  type: SEARCH_GET_INFO_GAMES,
  payload,
  loaging: true,
});

export const getInfoGamesSuccess = (payload) => ({
  type: GET_INFO_GAMES_SUCCESS,
  payload,
  loaging: false,
});

export const getInfoGamesError = (payload) => ({
  type: GET_INFO_GAMES_ERROR,
  payload,
  loaging: false,
});


export const getInfoGamesThunk = (char) => (dispatch) => {
  dispatch(searchGetInfoGames(char))
    charAPI(char).then((data) => {
      const payload = {
        character: data[0],
      };  
      dispatch(getInfoGamesSuccess(payload))
    }, 
    (error) => dispatch(getInfoGamesError(error))
  )
};

// export const getInfoGamesThunk = (char) => async (dispatch) => {
//   try {
//     const data = await charAPI(char);
//     const payload = {
//       character: data,
//     };  
//     dispatch(getInfoGamesSuccess(payload))
//   } catch (error) {
//     dispatch(getInfoGamesError(error));
//   }
// };


// Gabarito

// import charAPI from '../services/charAPI';
// export const SEARCH_BEGIN = 'SEARCH_BEGIN';
// export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
// export const SEARCH_ERROR= 'SEARCH_ERROR';

// export const searchBegin = (characterSearched) => (
//   { type: SEARCH_BEGIN, loading: true, characterSearched }
// );

// export const searchSuccess = (character) => (
//   { type: SEARCH_SUCCESS, loading: false, character }
// );

// export const searchFailure = (error) => (
//   { type: SEARCH_ERROR, loading: false, error }
// );

// export function thunkCharacter(name) {
//   return (dispatch) => {
//     dispatch(searchBegin(name));
//     return charAPI(name)
//       .then(
//         (character) => dispatch(searchSuccess(character)),
//         (error) => dispatch(searchFailure(error.message)),
//       );
//   };
// };