export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  // Desenvolva aqui o código da action assíncrona
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('http://random.cat/meow')
      .then((response) => response.json()) //.then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
      .then(
        (data) => dispatch(getPicture(data),
        (error) => console.error(error)
        ));
  }
}

// export const fetchAPI = () => async (dispatch) => {
//   dispatch(requestAPI());
//   try {
//     const response = await fetch()
//     const data = await response.json()
//     dispatch(getPicture(data));
//   } catch (error) {
//     console.error(error);
//   }
// };
